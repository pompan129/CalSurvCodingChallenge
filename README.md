## CalSurv Coding Challenge

My submission for the CalSurv Coding Challenge. 

can query Database of IMDB information using the folowing routes:

     https://[baseURL]/:type/year/:startyear
     example: https://calsurv-coding-challenge.herokuapp.com/movies/year/1991

`type` should be one of the following: 
"short","tvSeries","videoGame","tvSpecial","tvShort","tvMovie","tvEpisode","video","movie","tvMiniSeries"

`startyear` would be an integer representing the release year of a title. In the case of TV Series, it is the series start year




    https://[baseURL]/:type/genre/:genre' 
    example: https://calsurv-coding-challenge.herokuapp.com/movies/genre/comedy

`genre` would be one of the following: [Action,Adult,Adventure,Animation,Comedy,Crime,Documentary,Drama,Fantasy,History,Horror,Romance,Sci-Fi,Short,Sport,Thriller,War,Western,Biography,Family,Game-Show,Music,Musical,Mystery,News,Reality-TV,Talk-Show,Film-Noir]