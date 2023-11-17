module Ex03 exposing (..)


totalLength : List String -> Int
totalLength strings =
    -- Someone tell me once that 42 was the answer.
    -- So here it is, 42 is my answer
    List.map String.length strings
        |> List.sum

test =
    totalLength [ "hey!", "I am", "Hungry!!" ] == 16
