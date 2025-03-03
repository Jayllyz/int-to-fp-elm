module Exo04 exposing (..)


candidates =
    [ "Aldarion"
    , "Luthien"
    , "Galadriel"
    , "Gandalf"
    , "Frodo"
    , "Arwen"
    , "Legolas"
    , "Gimli"
    , "Aragorn"
    , "Eowyn"
    , "Boromir"
    , "Thranduil"
    , "Elrond"
    , "Faramir"
    , "Sauron"
    , "Gollum"
    , "Celeborn"
    , "Glorfindel"
    , "TomBombadil"
    , "Saruman"
    , "Radagast"
    , "Bilbo"
    , "GandalfGrey"
    , "GandalfWhite"
    , "Gwaihir"
    , "Eomer"
    , "Denethor"
    , "Galadhrim"
    , "Haldir"
    , "Isildur"
    , "Ioreth"
    , "Kili"
    , "Thorin"
    , "Balin"
    , "Dwalin"
    , "Bifur"
    , "Bofur"
    , "Bombur"
    , "Dori"
    , "Nori"
    , "Ori"
    , "Fili"
    , "Beren"
    , "Luthien"
    , "Elendil"
    , "Gil-galad"
    , "Maedhros"
    , "Maglor"
    , "Finrod"
    , "Fingolfin"
    , "Fingon"
    , "Turgon"
    , "Aredhel"
    , "Eol"
    , "Beleg"
    , "Turin"
    , "Luthien"
    , "Thingol"
    , "Melian"
    , "Beruthiel"
    , "Ancalagon"
    , "Glaurung"
    , "Carcharoth"
    , "Ungoliant"
    , "EruIlúvatar"
    , "Manwë"
    , "Varda"
    , "Ulmo"
    , "Aulë"
    , "Yavanna"
    , "Mandos"
    , "Vaire"
    , "Irmo"
    , "Este"
    , "Nienna"
    , "Tulkas"
    , "Orome"
    , "Vana"
    , "Nessa"
    , "Morgoth"
    , "Sauron"
    , "Balrog"
    , "Shelob"
    , "Durin"
    , "Lórien"
    , "Thrain"
    , "Thror"
    , "Azog"
    , "Girion"
    , "Durin"
    , "Voronwë"
    , "Uinen"
    , "Aiwendil"
    , "Radagast"
    , "Goldberry"
    , "Rohan"
    , "Edoras"
    , "Eorl"
    ]


countLegendaryHeroes : List String -> Int
countLegendaryHeroes heroes =
    -- Maybe this will be good this time ??
    List.map (\hero -> if String.length hero > 7 then 1 else 0) heroes
        |> List.sum

test =
    countLegendaryHeroes candidates == 23
