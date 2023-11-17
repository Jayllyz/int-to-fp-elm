module Main exposing(main)

type Symbol
    = Spade
    | Heart
    | Diamond
    | Club

type Number
    = One
    | Two
    | Three
    | Four
    | Five
    | Six
    | Seven
    | Eight
    | Nine
    | Ten
    | Jack
    | Queen
    | King
    | Ace

type alias Card =
    { value : Number
    , symbol : Symbol
    , joker : Bool
    }