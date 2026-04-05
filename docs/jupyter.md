---
language: Jupyter Notebook
slug: jupyter
type: reference
level: beginner–intermediate
last_updated: 2026-04-01
official_docs: https://docs.jupyter.org/en/latest/use/using.html
---

# Jupyter Code Snippets

<br>

<p> Page Links: <br>
<a href="./../index.html">Compare</a>  • 
<a href="./../details.html">In Depth</a>  • 
<a href="./../frameworks.html">Frameworks</a>
</p>

<p> Markdown File Links: <br>
<a href="./csharp.md">csharp.md</a>  • 
<a href="./javascript.md">javascript.md</a>  • 
<a href="./jupyter.md">jupyter.md</a>  • 
<a href="./jupyter2.md">jupyter2.md</a>  • 
<a href="./php.md">php.md</a>  • 
<a href="./python.md">python.md</a>  • 
<a href="./react.md">react.md</a>  • 
<a href="./typescript.md">typescript.md</a>
</p>

## Jupyter Notebook & Pandas notes and snippets

I have been using Jupyter Notebook through Anaconda.

Command line:

```sh
# Installing Jupyter with pip
pip3 install --upgrade pip
# Then install the Jupyter Notebook using:
pip3 install jupyter

# Upgrading Jupyter Notebook
# If using Anaconda, update Jupyter using conda:
conda update jupyter
# If using pip:
pip install -U jupyter

# Start the notebook server (Running the notebook, http://localhost:8888)
jupyter notebook
# or this:
jupyter lab

# Open a specific notebook:
jupyter notebook notebook.ipynb

# Start notebook server without opening a web browser
jupyter notebook --no-browser
# get help
jupyter notebook --help
# execute a notebook
jupyter execute notebook.ipynb
jupyter execute notebook.ipynb notebook2.ipynb
jupyter execute notebook.ipynb --allow-errors
```

Methods I had a problem with using my csv file:

```py
df.min()
df.max()
df.sum()

df.index
df.name

df.loc[5:10]
```

> IT'S REALLY IMPORTANT TO SET THE INDEX IF YOUR CURRENT INDEX DOES NOT MAKE SENSE FOR THE PLOT YOU WANT, ESPCIALLY IF IT IS JUST A RANGE INDEX

Run the project: `jupyter lab` or `jupyter notebook`. How do those commands differ from opening Anaconda then Jupyter Notebook and viewing a `.ipynb` file in the browser?

Questions

1. `set_index(col)` vs `index_col(num)`

THERE ARE TOO MANY METHODS IN THIS TOP SECTION THAT ARE COVERED FURTHER DOWN - REMOVE THEM

- <kbd>SHIFT</kbd> + <kbd>TAB</kbd> for a method opens docs
- A - add cell above | B - add cell below
- D + D - delete selected cell
- Z - undo delete cells
- C - copy a selected cell
- V - paste copied cell below selected cell - you can go to a different cell
- CTRL + SHIFT + UP/DOWN: move selected cell up/down
- M on any selected cell and it will make it a markdown cell
- Y makes a cell a Code cell
- In `[*]` - indicates the code is still running - restart the kernel!
- Kaggle for datasets: https://www.kaggle.com/datasets
- mean(): the average
- median(): the item in the middle when sorted
- mode(): the most frequent value
- **these also take `numeric_only=True`**
- describe(): a generic name because it does multiple things - it generates descriptive statistics
  - just like the other methods, it returns a dataframe
- dot and bracket notation to select a column
  - df.age
  - df["age"] - use this to select multiple columns
  - df[var_name] - need square brackets for a variable
  - another area where you need bracket notation is if you have a column name that is a reserved keyword like a dataframe method
- `head(n=5)`: returns a new series of the first 5 items, 5 is default
- `tail(n=5)`: same - returns a new series
- `descibe()`:
- `unique()`:
- `nunique()`:
- `nlargest()`: get the num largest values
- `nsmallest()`: get the num smallest values
- `value_counts()`:
- `plot()`: `kind` param is the type of plot you want
- `value_counts()`: on series and dataframes - returns a series containing counts of unique values
- both dataframes and series are indexed
- the default for `read_csv` is a `range()` index
- you can manually change the index for something that makes more sense
- to change the index use `set_index(col)` - you can also do multi-indexing
- it makes a new data frame unless you pass in `inplace=True`
- a param named `index_col(num)` where `num` is the position of the column you want as the index
- `sort_values()`: a very commonly used method - it is a dataframe and series method - makes a new dataframe
  - param named `key`: takes a lambda and it will run for each element
- `sort_index()`: to sort by the index "column"
- `loc[]`: to access data by row instead of by column

### Pandas: read_csv and dataframe info

- `read_csv()`:
- `type()`:
- `index_col`:
- `sep` param:
- `names` param:
- `.columns`:
- `.shape`:
- `.dtypes`:
- `.head()`:
- `.tail()`:
- `.info()`:

```py
# ✅ USEFUL COMMANDS ✅
import pandas as pd
df = pd.read_csv('file.csv')

# 1. Basic read
sellers = pd.read_csv('data/bestsellers.csv')

# 2. tab separated, .tsv so \t
titles = pd.read_csv('data/movie_titles.tsv', sep="\t")

# 3. Tell Pandas to use the first column as the index using index_col
everest = pd.read_csv('data/mount_everest_deaths.csv', index_col=0)

# 4. pipe | separated, has an index col but that is not titled
netflix = pd.read_csv("data/netflix_titles.csv", sep="|", index_col=0)

# names is a list of strings which are the NEW column names
# 5. original col headings were bad so header=0 which overrides the col names
state_pops = pd.read_csv("data/nst-est2020.csv", names=names, header=0)

# shows a list of the col names
# Useful to see what you can select or if any column names are keywords
sellers.columns

# number of records/rows and columns: (21613, 21)
sellers.shape

# shows the first 5 rows - makes a new DataFrame
first_5 = sellers.head()

# shows the last 7 rows - makes a new DataFrame
last_7 = sellers.tail(7)

# shows each column, non-null count, and data type for each
# also shows the number of records and columns
# id             21613 non-null  int64
sellers.info()

# just shows the col names and their data type
# int, float, or object
sellers.dtypes

# 🚫 LESS USEFUL COMMANDS 🚫
type(sellers)
# pandas.core.frame.DataFrame - nothing useful

len(sellers)
# shows the number of records: 21613

# set the min # of rows to display
# Only useful for large datasets I think
pd.options.display.min_rows = 20
```

Odd commands to learn later or skip

```py
import statistics

# see methods on statistics
statistics.

# Add ? then execute cell
statistics?

pd.read_csv?
```

### Pandas: dataframe value methods

> I need notes on these

- `.min()`:
- `.max()`:
- `.sum()`:
- `.count()`:
- `.describe()`:
- `.value_counts()`:
- `.plot()`:
- `.values`:
- `.index`:
- `.unique()`: Return unique values, returned in order of appearance, does NOT sort. Significantly faster than `numpy.unique` for long enough sequences. Includes `NA` values.
- `.nunique()`
- `numeric_only=True` works for `.min()` and `.max()` also

```py
type(houses.max())
# pandas.core.series.Series

houses.count()
# returns the non-null count for each column

# O or object or numpy.object for Object -> text fields
titanic.describe(include=['object']) # or like this if just one
titanic.describe(include='object')

# sums each column though a lot do not make sense
houses.sum(numeric_only=True)

houses["bedrooms"].unique()

# number of unique authors
books["Author"].nunique()

# nlargest()
books["Price"].nlargest(10)

# selecting multiple columns
netflix[["title", "rating"]]

# value_counts
bestsellers["Name"].value_counts().head(3)
bestsellers[["Author", "User Rating"]].value_counts()
bestsellers["Genre"].value_counts().plot(kind="pie")
bestsellers["Author"].value_counts().head(10).plot(kind="bar")
bestsellers["Author"].value_counts().head(10).plot(kind="barh")

# Other methods
# mean/average values for a dataframe
bestsellers.mean()
# most recurring value - mode
bestsellers.mode()
```

Methods that caused me a problem

```py
# I GOT ERRORS FOR ALL OF THESE
houses.min()
# shows the min value for each column

houses.max()
# shows the max value for each column

houses.sum()

titanic.name
titanic["name"]
# that returns a series
```

Methods that do not seem useful:

```py
names = titanic.name
names.values # without index/label
names.index # just the labels - RangeIndex(start=0, stop=1309, step=1)
```

### Pandas: sorting, indexing, rows

> STOPPED HERE

**loc[]** - access data by a row LABEL

**iloc[]** - access data by row but using index position/number

- `.index`:
- `.set_index()`:
- `.sort_values()`:
- `.sort_index()`:
- `.loc()`:
- `.iloc()`:
- `sort_values`: a very commonly used method - it is a dataframe and series method
- `sort_values` does not operate on the original dataframe - it makes a new dataframe but you can set it to sort in place
- param named `key`: takes a lambda and it will run for each element
- `sort_index`: to sort by the index "column" - it does not sort in place
- `loc[]`: to access data by row instead of by column - access a group of rows and columns by label(s) or a boolean array
- access by the label -> `.loc[label]`
- it returns a series
- use can also use slice syntax: [start:end] - end included?!?
  - you can slice with text values
- `iloc[]`: accross rows out of a dataframe but it takes an integer
- it returns a series - wrap in [] to get a dataframe
- can pass is a list of positions - can also slice
- with the rows you get you can also specify what columns you want
- The primary difference is that `.loc` is used for label-based indexing, while `.iloc` is used for integer position-based indexing.
- but index slicing worked for `loc` - column names do not work with `.iloc`
- loc and iloc work on dataframes and series

```py
import pandas as pd
btc = pd.read_csv("data/coin_Bitcoin.csv")

# make Date the index - makes a new dataframe
# Only use when you don't set the index with index_col with read_csv
btc.set_index("Date")

df = pd.read_csv("data/world-happiness-report-2021.csv", index_col=0)

countries.sort_values("Healthy life expectancy")
countries.sort_values("Healthy life expectancy", ascending=False)
countries.sort_values("Healthy life expectancy", ascending=False, inplace=True)

titantic.sort_values("name", key=lambda col: col.str.lower())
# why str, why not just col.lower()?

countries.sort_index()
countries.sort_index(ascending=False)

titanic.pclass.value_counts().sort_values().plot(kind="bar")
titanic.pclass.value_counts().sort_index().plot(kind="bar")

# get the count os people who were 18 years old
titanic["age"].value_counts().loc["18"]

countries.loc["Greece"]
# add square brackets to return a dataframe instead of a series
countries.loc[["Greece"]]
# get multiple rows
countries.loc[["Canada", "Mexico", "United States"]]
# slicing
titanic.loc[5:10]

# get 20th row
contries.iloc[20]
# return a dataframe
contries.iloc[[20]]
# slice
contries.iloc[20:30]

# YOU CAN'T USE THIS SYNTAX UNLESS YOUR INDEX IS AN INTEGER
# That may be wrong
df.iloc[20:30, ['col1', 'col2']]
houses.loc[20:30, ['price', 'bedrooms']]

# set "Name" as index in place
pokemon.set_index("Name", inplace=True)
```

Methods that do not seem useful:

```py
# see the index
btc.index
```

### Pandas: filtering

- `.between()`: - find values between ranges
- `.isin()` - filtering a series -> find values that are in some collection
- use the tilde `~` character to reverse the booleans

```py
# Selecting
titanic.name
titanic.loc[17:20]

# Filtering
t = titanic.head()
females = titanic[t.sex == 'female'] # or
females = titanic[titanic.sex == 'female']

# between(left, right)
houses[houses["bedrooms"].between(5, 7)]

# isin(list)
countries = ["India", "Japan", "South Korea"]
netflix["country"].isin(countries)

# True & True
houses[(houses["waterfront"] == 1) & (houses["price"] < 500000)]

# True | False
# False | True
# False | False

houses[(houses["yr_built"] >= 2014) | (houses["yr_renovated"] >= 2014)]

df = titanic
women = df.sex == "female"
~women

# returns records with NaN or maybe other falsies
netflix[netflix["director"].isna()]

women = titanic["sex"] == "female"
titanic[women].survived.value_counts().plot(kind="pie")
titanic[~women].survived.value_counts().plot(kind="pie")
```

<br>

Exercises

```py
# Find the books written by Pete Souza
books[books["Author"] == "Pete Souza"]

# Find the books that are under 10 dollars
books[books["Price"] < 10]

# Find the books that have a price between 50 and 60 dollars
# books[(books["Price"] > 50) & (books["Price"] < 60)]
books[books["Price"].between(50,60)]

# Find all the books written by Kristin Hannah, Andy Weir, or Delia Owens
books[books["Author"].isin(["Kristin Hannah", "Andy Weir", "Delia Owens"])]

# Find the Non Fiction books that are rated 4.9
books[(books["Genre"] == "Non Fiction") & (books["User Rating"] == 4.9)]

# Find the fiction book with the lowest User Rating
books[books["Genre"] == "Fiction"].sort_values("User Rating")

# Find 2012's top 5 Fiction books with the most Reviews
df = books[(books["Year"] == 2012) & (books["Genre"] == "Fiction")]
df.sort_values("Reviews", ascending=False).head()

# Create a bar plot showing the 5 authors who have the most books with a rating under 4.5
low_rated = books[books["User Rating"] < 4.5]
low_rated["Author"].value_counts().head().plot(kind="bar")
```

### Pandas: Adding & Removing Columns

- .drop(): drops columns or rows - it does not affect the original dataframe
  - labels: can be a single column or a list
  - axis: 1 = columns
  - `inplace=True` to actually remove from the dataframe
- `axis`: default is `0` which means row or to drop by the index label
- you can also delete a row by position
- `index[]`: add a single index number or use slice syntax
- .insert(): use when you want the column to go in a specific position
- you can also copy the values from another column

```py
# drop(labels, axis)
# Drop "Symbol" column
btc.drop(labels="Symbol", axis=1)

# Drop multiple columns
# btc.drop(labels=["SNo", "Name", "Symbol"], axis='columns')
btc.drop(columns=["SNo", "Name", "Symbol"])

# Dropping rows
countries.drop(labels="Denmark", axis=0)

# since labels is the 1st arg, you can just pass a list
# and you can not provide axis since the default is 0
countries.drop(["Denmark", "Finland", "Iceland"])

# drop by index
countries.drop(countries.index[0:3])

# adding static columns
# add "species" series to the titanic dataframe
titanic["species"] = "human"

# use insert() when you want the column to go in a specific position
houses.insert(1, "county", "King County")

# copy another column's values - can do the same using insert()
houses["sales_price"] = houses["price"]

# creating new dynamic columns
titanic["num_relatives"] = titanic["sibsp"] + titanic["parch"]
houses["price_sqft"] = houses["price"] / houses["sqft_living"]
btc["close"] - btc["open"]
```

<br>

Exercises

```py
# Import the JoeBidenTweets.csv dataset.  Use the tweet "id" as the index
import pandas as pd
tweets = pd.read_csv("data/JoeBidenTweets.csv", index_col=0)

# Drop the "url" column (NOT inplace)
tweets.drop("url", axis=1)

# Drop the row with the id of 361388562(NOT inplace)
tweets.drop(361388562)

# Add a new column called "user".  Set it to "Joe Biden" for all rows
tweets["user"] = "Joe Biden"
tweets

# Create a new column called "ratio".  It should contain the result of dividing each tweet's replies by its retweets
tweets["ratio"] = tweets["replies"] / tweets["retweets"]
tweets

# Find the top 10 highest ratio tweets
tweets.sort_values("ratio", ascending=False).head(10)

# Create a column called "interactions" that contains the sum of each tweet's replies, retweets, quotes, and likes
tweets["interactions"] = tweets["replies"] + tweets["retweets"] + tweets["quotes"] + tweets["likes"]

# Find the top 8 tweets by number of "interactions"
tweets.sort_values("interactions", ascending=False).head(8)
```

### Pandas: Updating Values

- replace()
- loc()
- rename(): to change the labels on the rows or the column names - you can use RegEx
  - it works like drop() - axis of 0 is the index, 1 for columns
  - you provide a dictionary that maps the existing column name to a new name
  - it does not do it in place unless you add `inplace=True`
- don't replace anything with `None` unless you use list notation
- NOTE: value_counts does not include NA values unless you pass it `dropna=False`
- REMEMBER: `.loc` uses square brackets `[]`
- we can access rows by their label
- and then you can ask for specific columns by providing a list of column names
- you can use the same syntax to update specific columns
- you can create new columns with the loc syntax
- you can use loc to access rows by their index label, but also with a boolean array

```py
# update column names
mapper = {
  "Regional indicator": "region",
  "Ladder score": "ladder_score"
}
countries.rename(columns=mapper)

# update index labels (rows)
mapper = {
  "Denmark": "DNK",
  "Finland": "FIN"
}
countries.rename(index=mapper)

# Basic replace
titanic["sex"].replace(["female", "male"], ["F", "M"])

# None example
titanic["age"].replace(["?"], [None])

# .loc[[rows], [columns]]
countries.loc[["Brazil", "Panama", "Belize"], ["Ladder score", "Generosity"]]

# this happens in place:
countries.loc[["Denmark", "Sweden", "Norway"], ["Regional indicator"]] = "Scandinavia"

# create a new column, give the selected countries a value, all others get NaN
countries.loc[["Finland", "Denmark", "Iceland"], ["Regional indicator", "is_cold"]] = ["Nordic", "Yes"]

# making updates with loc() and boolean masks
many_bedrooms = houses["bedrooms"] >= 10
houses.loc[many_bedrooms, ["bedrooms"]] = "TOO MANY"
```

<br>

Exercises

```py
# Read in the netflix_titles.csv dataset.  Make sure to tell pandas to use the correct separator character!
import pandas as pd
netflix = pd.read_csv("data/netflix_titles.csv", sep="|")

# set the index to be the "show_id" (inplace)
netflix.set_index("show_id", inplace=True)

# Find the row with the id of s2202 and set its director to "Greg Whiteley"
netflix.loc["s2202", "director"] = "Greg Whiteley"

# Update the "duration" of the shows with index s2881 and s3601 to be "GONE TOO SOON"
netflix.loc[["s2881", "s3601"], "duration"] = "GONE TOO SOON"

#rename the release_year column to "release_yr" in place
netflix.rename(columns={"release_year": "release_yr"}, inplace=True)
# netflix.rename({"release_year": "release_yr"}, axis=1)
netflix

# Find the show called "Evil"
# Change its index label to s6666 inplace
netflix.rename({"s1907": "s6666"}, inplace=True)
netflix[netflix["title"] == "Evil"]

# In the rating column, please replace all instances of "UR" and "NR" with "No Rating".  Don't do it inplace!
netflix["rating"].replace(["NR", "UR"], "No Rating")
# netflix["rating"].value_counts()

# Add a new column "is_fav" and set it to False for all rows
# Update the "is_fav" column to True for the titles in my list of favs (provided below)
favs = ["Young Royals", "Dark", "Big Mouth", "BoJack Horseman", "The Queen's Gambit", "American Vandal", "Russian Doll", "Godless"]
netflix["is_fav"] = False
netflix.loc[netflix["title"].isin(favs), "is_fav"] = True
netflix["is_fav"].value_counts()
```

### Pandas: Working with Types and NA

- astype(): a series method, convert data types for columns
- category data type: used to represent text data where there is a finite number of possible values -> titanic.sex - 2 choices
- when pandas shows object as the data type, that allows for any data type
- doing that will reduce the size of your dataset - it optimizes the dataset
- to_numeric(): it is not a series method, it is on pandas (pd)
- you can provide it data that is not all "castable"
- it has an `errors` argument with values of raise, ignore or **coerce**
- coerce sets invalid values to `NaN` - it does not mutate the original data series
- isna(): shows where a value is na - use it to filter to find specific rows with na values
- dropna(): a series and dataframe method, you only tend to use it to remove rows that have bad values - `any` or `all` are the options, `how="all"`
- `subset` param: provide a label or list of labels to look at
- fillna(value): replace na values with some other value

```py
# Changing object to float using astype()
# Use square brackets when replacing with None
titanic["age"].replace(['?'], [None], inplace=True)
titanic["age"].astype("float") # or
titanic["age"] = titanic["age"].astype("float") # or
titanic["age_float"] = titanic["age"].astype("float")

# Set category type
titanic["sex"] = titanic["sex"].astype("category")

# pd.to_numeric() and coerce
titanic["age"] = pd.to_numeric(titanic["age"], errors="coerce")

stats = pd.read_csv("data/game_stats.csv")
# returns a boolean dataframe, True for any na
stats.isna()
# returns a boolean series
stats["league"].isna()
# find rows with na values for a column
stats[stats["league"].isna()]

# dropna() - only returns rows that have valid values
stats["assists"].dropna()

# using subset to drop rows based on a list of columns
stats.dropna(subset=["league"])

# for entire dataframe
stats.fillna(0)
# just a column
stats["league"].fillna("amateur")

# values for specific columns
stats.fillna({"points": 0, "assists": "None"})

sales = pd.read_csv("data/sales.csv")
sales["shipping_zip"].fillna(sales["billing_zip"])
```

<br>

Exercises

```py
# Import the netflix_titles.csv dataset, making sure to pass the correct separator character
import pandas as pd
netflix = pd.read_csv("data/netflix_titles.csv", sep="|", index_col=1)

# Quite a few rows are missing a value for country. Find the rows with no country
netflix[netflix.country.isna()]

# Find the rows with no director, cast, AND country listed
netflix[netflix.country.isna() & netflix.director.isna() & netflix.cast.isna()]

# Drop all rows in the dataframe that have at least one NA value (not inplace!)
netflix.dropna()

# Drop all columns in the dataframe that contain at least one NA value, not inplace!
netflix.dropna(axis=1)

# Drop all rows in the dataset that have a missing director or cast (not inplace!)
netflix.dropna(subset=["director", "cast"])

# Find the rows that are missing a "rating"
# Replace the na ratings with "TV-MA" USING .loc[]
netflix.loc[netflix["rating"].isna(), "rating"] = "TV-MA"

# Fill the missing "country" values with the most common (mode) country value, inplace!
# Do this using fillna, rather than .loc
mode_country = netflix["country"].mode()[0]
netflix.fillna({"country": mode_country}, inplace=True)
# netflix.country.isna().value_counts()
```

### Pandas: Working with Dates and Times

- pd.to_datetime()
- dt
- pd.to_datetime(): it can take a number, a string, a list of strings, a series, or a dataframe - it's a pandas method
- it converts the argument to a date-time object
- `format` param: use `y`, `m`, and `d` for year, month, and day (directives)
- `dayfirst` & `yearfirst` - both default to `False`
- you have to tell Pandas to turn a filed into datetime
- after you read in a file, use pd.to_datetime()
- you can create a new column or update it in place
- `dt`: used on a series - dt.year, .month, .dayofweek, .hour
- you can filter on a datetime column - use <, >, etc
- == is difficult because datetimes also include times
- doing math with dates
- returns a data type called `timedelta64` or Timedelta -> a span of time
- it has special methods you can use
- invert_yaxis: inverting the axis makes sense for the charts dataframe
- isocalendar

```py
pd.to_datetime("2019/12/31")
pd.to_datetime("December 31st 2019")
# Timestamp('2019-12-31 00:00:00')
pd.to_datetime("December 31st 2019 4pm")
# Timestamp('2019-12-31 16:00:00')

pd.to_datetime("10/11/12", dayfirst=True)
# Timestamp('2012-11-10 00:00:00')
pd.to_datetime("10/11/12", yearfirst=True)
# Timestamp('2010-11-12 00:00:00')
pd.to_datetime("10/11/12", format="%y/%m/%d")
# Timestamp('2010-11-12 00:00:00')

meetings = ["Dec 11 2019 Meeting","Jan 6 2020 Meeting", "Mar 19 2020 Meeting", "Apr 15 2020 Meeting"]
pd.to_datetime(meetings, format="%b %d %Y Meeting")
# DatetimeIndex(['2019-12-11', '2020-01-06', '2020-03-19', '2020-04-15'], dtype='datetime64[ns]', freq=None)

ufos = pd.read_csv("data/nuforc_reports.csv")
ufos.info()
pd.to_datetime(ufos["date_time"])

# create a new column with formatted dates
ufos["date"] = pd.to_datetime(ufos["date_time"])
# update it in place
ufos["date_time"] = pd.to_datetime(ufos["date_time"])
# or you can convert when you read in the file
ufos = pd.read_csv("data/nuforc_reports.csv", parse_dates=["date_time"])

ufos["date_time"] # series
ufos["date_time"].dt.year # returns a series of the year for each row
ufos["date_time"].dt.year.value_counts()

ufos[ufos["date_time"] < "1980"]
ufos[ufos["date_time"] > "2019-12-15"]
# get just the date without the time:
ufos["date_time"].dt.date

# equal to 2 AM
ufos[ufos["date_time"].dt.hour == 2.0].head()

# use between for years
ufos[ufos["date_time"].between("1988", "1989")].sort_values("date_time")

ufos["date_time"].dt.date.value_counts()

ufos["posted"] = pd.to_datetime(ufos["posted"])
# make a new column of the diff between observation and reported times
ufos["time_before_reported"] = ufos["posted"] - ufos["date_time"]

# use .days to get the days between, didn't need to create time_before_reported
ufos["days_before_reporting"] = ufos["time_before_reported"].dt.days

# parse the date column as datetime right away
charts = pd.read_csv("data/billboard_charts.csv", parse_dates=["date"])

charts["artist"].value_counts().head(10).plot(kind="bar")

number_1s = charts["rank"] == 1
# why [number_1s]["artist"] ???
charts[number_1s]["artist"].value_counts().head(10).plot(kind="bar")

# Find the top songs that were on the charts the longest
charts[number_1s]["song"].value_counts()

# The longest song
charts[charts["song"] == "Old Town Road"]
# plot it's top 100 journey, set the date as the index
p = charts[charts["song"] == "Old Town Road"].set_index("date")["rank"].plot()
p.invert_yaxis()
```

<br>

Exercises

```py
import pandas as pd

# Import the "kc_house_data.csv" and parse the "date" column in a single line
sales = pd.read_csv("data/kc_house_data.csv", parse_dates=["date"])

# Calculate how many days the dataset spans
timespan = sales["date"].max() - sales["date"].min()
timespan.days

# 1. Find the date that had the most house sales
# 2. Then find all the homes sold on that date
top_date = sales["date"].mode()[0]
sales[sales["date"] == top_date]

# Create a pie chart showing the years that home sales took place in (2014 and 2015)
sales["date"].dt.year.value_counts().plot(kind="pie")

# Find all the homes sold in 2014, sorted from earliest to latest
sales[sales["date"].dt.year == 2014].sort_values("date")

# Count the number of sales that took place in each month of the year.  Which month had the most?
sales["date"].dt.month.value_counts()

# 1. Find the homes sold between May 1st 2014 and May 1st 2015
# 2. Create a bar plot showing the total number of sales per month in that period
# 3. The x axis should be in calendar order (1-12)
one_year = sales[sales["date"].between("2014-05-01", "2015-05-01")].sort_values("date")
one_year["date"].dt.month.value_counts().sort_index().plot(kind="bar")

# Count up the number of homesales by day of the week
sales["date"].dt.dayofweek.value_counts()

# Create a line plot showing the total number of sales by week of the year number (1-52)
sales["date"].dt.isocalendar().week.value_counts().sort_index().plot()

# Create a bar plot showing the total number of sales that took place in December, January, and February
df = sales[sales["date"].dt.month.isin([12,1,2])]
df["date"].dt.month.value_counts().plot(kind="bar")

# 1. Work with the homes sold between May 1st 2014 and May 1st 2015
# 2. Within that year, find the waterfront homes that were sold
# 3. Which quarter of that year had the most waterfront home sales?  The least?
# 4. Create a bar plot showing the number of waterfront home sales per quarter
df = sales[sales["date"].between("2014-05-01", "2015-05-01")]
waterfront = df[df["waterfront"] == 1]
waterfront["date"].dt.quarter.value_counts().plot(kind="bar")
```

Where did these come from:

- rename()
- savefig()

---
