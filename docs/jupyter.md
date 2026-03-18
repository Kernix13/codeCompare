# Jupyter Code Snippets

<li><a href="./../index.html">Compare</a></li>
<li><a href="./../details.html">In Depth</a></li>
<li><a href="./../frameworks.html">Frameworks</a></li>

## Jupyter Notebook & Pandas notes and snippets

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
- these also take `numeric_only=True`
- describe(): a generic nameb\c it does multiple things - it generates descriptive statistics
- just like the other methods, it returns a dataframe
- dot and bracket notation to select a column
  - df.age
  - df["age"] - use this to select multiple columns
  - df[var_name] - need square brackets for a variable
  - another area where you need bracket notation is if you have a column name that is a reserved keyword like a dataframe method
- head(n=5): same - returns a new series
- tail(n=5): same - returns a new series
- descibe():
- unique():
- nunique():
- nlargest(): get the num largest values
- nsmallest(): get the num smallest values
- value_counts()
- plot(): `kind` param is the type of plot you want
- value_counts(): on series and dataframes - returns a series containing counts of unique values
- both dataframes and series are indexed
- the default for read_csv is a range() index
- you can manually change the index for something that makes more sense
- to change the index use `set_index(keys)` - you can also do multi-indexing
- it makes a new data frame unless you pass in `inplace=True`
- a param named `index_col(num)` where `num` is the position of the column you want as the index
- `sort_values`: a very commonly used method - it is a dataframe and series method - makes a new dataframe
  - param named `key`: takes a lambda and it will run for each element
- `sort_index`: to sort by the index "column"
- `loc`: to access data by row instead of by column

### Pandas: read_csv and dataframe info

- read_csv() | type() |
- index_col | sep | names |
- .columns | .shape | .dtypes
- .head() | .tail() | .info()

```py
import pandas as pd
df = pd.read_csv('file.csv')

import statistics

# see methods on statistics
statistics.

# Add ? then execute cell
statistics?

pd.read_csv?

import pandas as pd

# 1. tab separated, .tsv so \t
titles = pd.read_csv('data/movie_titles.tsv', sep="\t")

# 2. set 1st col in dataset as the index
# Tell Pandas to use the first column as the index using index_col
everest = pd.read_csv('data/mount_everest_deaths.csv', index_col=0)

# 1. & 2. pipe | separated, has an index col but that is not titled
netflix = pd.read_csv("data/netflix_titles.csv", sep="|", index_col=0)

# 3. names is a list of strings which are the NEW column names
# 4. original col headings were bad so header=0 which overrides the col names
state_pops = pd.read_csv("data/nst-est2020.csv", names=names, header=0)

sellers = pd.read_csv('data/bestsellers.csv')

type(sellers)
# pandas.core.frame.DataFrame

sellers.columns
# shows a list of the col names

len(sellers)
# shows the number of records: 21613

sellers.shape
# number of records and columns: (21613, 21)

pd.options.display.min_rows = 20
# set the min # of rows to display

first_5 = sellers.head()
# shows the first 5 rows - makes a new DataFrame

last_7 = sellers.tail(7)
# shows the last 7 rows - makes a new DataFrame

sellers.info()
# shows each column, non-null count, and data type for each
# also shows the number of records and columns
# id             21613 non-null  int64

sellers.dtypes
# just shows the col names and their data type
# int, float, or object
```

### Pandas: dataframe value methods

- .min() | .max() | .sum() | .count() | .describe() | .value_counts() | .plot()
- .values | .index |

```py
houses.min()
# shows the min value for each column

houses.max()
# shows the max value for each column

type(houses.max())
# pandas.core.series.Series

houses.sum()
# sums each column though a lot do not make sense
houses.sum(numeric_only=True)

houses.count()
# returns the non-null count for each column

# O or object pr numpy.object for Object -> text fields
titanic.describe(include=['object']) # pr like this if just one
titanic.describe(include='object')

titanic.name
titanic["name"]
# that returns a series

names = titanic.name
names.values # without index/label
names.index # just the labels - RangeIndex(start=0, stop=1309, step=1)

houses["bedrooms"].unique()

# selecting multiple columns
netflix[["title", "rating"]]

bestsellers["Genre"].value_counts().plot(kind="pie")
bestsellers["Author"].value_counts().head(10).plot(kind="bar")
bestsellers["Author"].value_counts().head(10).plot(kind="barh")
```

### Pandas: sorting, indexing, rows

- .index | .High |
- .set_index() | .sort_values() | .sort_index() | .loc() | .iloc() |
- sort_values: a very commonly used method - it is a dataframe and series method
- sort_values does not operate on the original dataframe - it makes a new dataframe but you can set it to sort in place
- param named `key`: takes a lambda and it will run for each element
- sort_index: to sort by the index "column" - it does not sort in place
- `loc`: to access data by row instead of by column - access a group of rows and columns by label(s) or a boolean array
- access by the label -> `.loc[label]`
- it returns a series
- use can also use slice syntax: [start:end] - end included?!?
  - you can slice with text values
- iloc: accrss rows out of a dataframe but it takes an integer
- it returns a series - wrap in [] to get a dataframe
- can pass is a list of positions - can also slice
- with the rows you get you can also specify what columns you want

```py
import pandas as pd
btc = pd.read_csv("data/coin_Bitcoin.csv")

# see the index
btc.index

# same range index for a series - looks at the High column
btc.High

# make Date the index - makes a new dataframe
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

df.iloc[20:30, ['col1', 'col2']]
houses.iloc[20:30, ['price', 'bedrooms']]
```

### Pandas: filtering

- .between(): - find values between ranges
- isin - filtering a series -> find values that are in some collection
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

### Pandas: Updating Values

- replace()
- loc()

```py

```

### Pandas: Working with Types and NA

- astype()
- pd.to_numeric()
- dropna()
- isna()
- fillna()
-

```py

```

### Pandas: Working with Dates and Times

- pd.to_datetime()
- dt

```py

```

- rename()
- savefig()

---

## Matplotlib notes and snippets

Sections 13-19

- TimeDeltas
- plt.show()
- figsize
- groupby()
- agg()
- set_index
- xs()
- get_level_values()
- stack()
- unstack()

```py

```

---

## Seaborn notes and snippets

Sections 20-22

- load_dataset()
- replot()
- displot()
- catplot
- set_style()
- despine()

```py

```
