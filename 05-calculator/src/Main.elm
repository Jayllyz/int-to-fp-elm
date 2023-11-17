module Main exposing (..)

import Browser
import Html as H exposing (Html)
import Html.Attributes as HA
import Html.Events as HE
import Main10Solved exposing (Msg(..))
import Main10Solved exposing (parseInput)
import Browser.Dom exposing (Error)



type alias Model =
    { number1Input : String
    , number2Input : String
    }


type Msg
    = Number1InputUpdated String
    | Number2InputUpdated String

type Result error value
    = Ok value
    | Err error

init : Model
init =
    { number1Input = "" , number2Input = "" }

toPositiveInt : String -> Result String Int
toPositiveInt string =
    case String.toInt string of
        Just number ->
            if number >= 0 then
                Ok number
            else
                Err "Nombre négatif"
        Nothing ->
            Err "Pas un nombre"
                

parseInput : Model -> Result String { number1 : Int, number2 : Int }
parseInput model =
    case toPositiveInt model.number1Input of
        Ok number1 ->
            case toPositiveInt model.number2Input of
                Ok number2 ->
                    Ok { number1 = number1, number2 = number2 }
                Err error ->
                    Err error
        Err error ->
            Err error


update : Msg -> Model -> Model
update msg model =
    case msg of
        Number1InputUpdated string ->
            { model | number1Input = string }
        Number2InputUpdated string ->
            { model | number2Input = string }
        

view : Model -> Html Msg
view model =
    H.div []
        [ H.div []
            [ H.text "Entrez un premier nombre:"
            , H.input [ HA.value model.number1Input, HE.onInput Number1InputUpdated ]
                []
            ]
        , H.div []
            [ 
                case String.toInt model.number1Input of
                    Just number ->
                        H.text ("Vous avez entré le nombre " ++ String.fromInt number ++ " !")

                    Nothing ->
                        H.text "Mais ce n'est pas un nombre ça !!"
            ]
        , H.div []
            [ H.text "Entrez un deuxième nombre:"
            , H.input [ HA.value model.number2Input, HE.onInput Number2InputUpdated ]
                []
            ]
        , H.div []
            [
                case String.toInt model.number2Input of
                    Just number ->
                        H.text ("Vous avez entré le nombre " ++ String.fromInt number ++ " !")

                    Nothing ->
                        H.text "Mais ce n'est pas un nombre ça !!"
                        
            ]
        , H.div []
            [ H.text "La somme de ces deux nombres est: "
            , case parseInput model of
                Ok { number1 , number2} ->
                    H.text (String.fromInt (number1 + number2))
                Err error ->
                    H.text error
            ]
        ]


main : Program () Model Msg
main =
    Browser.sandbox
        { init = init
        , view = view
        , update = update
        }
