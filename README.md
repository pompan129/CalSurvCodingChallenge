## CalSurv Coding Challenge

My submission for the CalSurv Coding Challenge. 

can query Database of IMDB information using the folowing routes:

    you can query types by year:
     https://[baseURL]/:type/year/:startyear
     example: https://calsurv-coding-challenge.herokuapp.com/movie/year/1991

`type` should be one of the following: 
"short","tvSeries","videoGame","tvSpecial","tvShort","tvMovie","tvEpisode","video","movie","tvMiniSeries"

`startyear` would be an integer representing the release year of a title. In the case of TV Series, it is the series start year

    you can program types by genre:
    https://[baseURL]/:type/genre/:genre' 
    example: https://calsurv-coding-challenge.herokuapp.com/movies/genre/comedy

`genre` would be one of the following: [Action,Adult,Adventure,Animation,Comedy,Crime,Documentary,Drama,Fantasy,History,Horror,Romance,Sci-Fi,Short,Sport,Thriller,War,Western,Biography,Family,Game-Show,Music,Musical,Mystery,News,Reality-TV,Talk-Show,Film-Noir]

You can also add query string variables:

    example:  https://calsurv-coding-challenge.herokuapp.com/movies/genre/comedy?year=2006&sort=primarytitle&limit=100&offset=1000

    possible variables are..
    - limit : Fetch number instances/rows (limit=25)
    - offset : Skip 8 instances/rows (offset=100)
    - adult : screens for adult movies only (adult=true)
    - type : same as type in params
    - year : same as startyear in params (only in list by genre)
    - sort : sort order of values (rating,year,genre,title)



    Thanks for the opportunity!
