---
language: Jupyter Notebook
slug: jupyter2
type: reference
level: beginner–intermediate
last_updated: 2026-04-04
official_docs: https://docs.jupyter.org/en/latest/use/using.html
---

# Jupyter Code Snippets for Matplotlib and Seaborn

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
<a href="./php.md">php.md</a>  • 
<a href="./python.md">python.md</a>  • 
<a href="./react.md">react.md</a>  • 
<a href="./typescript.md">typescript.md</a>
</p>

## Matplotlib notes and snippets

> How to see kwargs/docs for methods in Jupyter Notebook?

I missed `index.values` somehow in the Pandas lessons?

Sections 13-19

- TimeDeltas
- plt.show()
- figsize
- groupby() - ?
- agg() - ?
- set_index - ?
- xs() - ?
- get_level_values() - ?
- stack() - ?
- unstack() - ?

| Layer            | Tool                | Role                   |
| :--------------- | :------------------ | ---------------------- |
| Math engine      | NumPy               | Fast array math        |
| Data handling    | Pandas              | Tables, cleaning, prep |
| Visualization    | Matplotlib, Seaborn | Charts                 |
| Machine learning | scikit-learn        | Models & predictions   |

## Matplotlib

- Pandas calls plottting methods from Matplotlib
- Matplotlib has nothing to do with Pandas, it's a visualization library
- Matplotlib comes with Anaconda
- pyplot: the part of Matplotlib you want
- pyplot.plot(): takes an array, a list, a panda series, a numpy array (very common)
- `show()` method: plt.plot actually does not show anything unless you are in Jupyter Notebook
- using plt.show() does not show `Out [#]` - you just see the plot
- **you don't need `.show` if you are working in a notebook, but you do if you are working in a .py file**
- NumPy: https://numpy.org/ | https://numpy.org/doc/stable/
- more than one plot per cell -> a figure which is central to Matplotlib
- .arange(): a NumPy method, creates an evenly spaced list of values
- **NOTE**: besides `dt.dayofweek` this is a method `dt.day_name()` -> full day name
- `.index.values`: _look into this_

**Matplotlib terminology**:

- Figure: a canvas of different plots or just 1 plot
- Axes: each individual plot in a figure - so an "axes" is just one chart/graph
- you can make 3 plots on the same graph, or 3 axes in 1, or 3 figures
- .figure()

```py
import matplotlib.pyplot as plt

# plot(y)
# plot(x, y)
# plot(x-axis_series, y-axis_series)
plt.plot()

salaries=[55000,65000,72000,90000,115000,150000]
ages = [20,25,30,32,40,45]
plt.plot(ages, salaries)

plt.show()

import numpy as np
nums = np.arange(5)
nums
# array([0, 1, 2, 3, 4])
nums * nums
# array([0, 1, 4, 9, 16])
# 1st valie is x, 2nd is y
# if done in same cell it adds 3 lines to the same graph
plt.plot(nums, nums)
plt.plot(nums, nums * nums)
plt.plot(nums, nums ** 3)

# create a new figure & activate it as the current figure
# so everything that comes after will be added to the new figure
plt.figure()
plt.plot(nums, nums)
plt.plot(nums, nums * nums)
plt.plot(nums, nums ** 3)

# this creates 2 figures
plt.figure()
plt.plot(nums, nums)
plt.figure()
plt.plot(nums, nums * nums)
plt.plot(nums, nums ** 3)
```

### figsize & plot dimensions

- controlling the size of a figure
- you use inches for the width and height
- `figsize` param: takes a tuple, default is 6.4" x 4.8", ([6.4, 4.8])
- inch is not absolute - you can also specify the dots per inch/dpi which is the resolution of ince inch
- `dpi` default is `100`

```py
# skinny but tall plot:
plt.figure(figsize=(2, 6))
# very wide plot:
plt.figure(figsize=(20, 6))
plt.plot(nums, nums)
# with additional dpi param
plt.figure(figsize=(2, 6), dpi=200)
plt.plot(nums, nums)
```

### changing Matplotlib stylesheets

- there are pre-configured built-in stylesheets that come with Matplotlib
- about 26 of them + you can make your own
- stylesheets have their own preconfigured values
- 'fivethirtyeight' is a popular stylesheet
- all the 'seaborn' variations are also popular
- any plots after adding a stylesheet will take on that style
- if you choose a different stylesheet, that will affect any later plots

```py
# to see the name of the stylesheets
plt.style.available

# use a stylesheet
plt.style.use('fivethirtyeight')
```

### line styles, colors, widths, and more

- how to customize the appearance of lines - color, width, opacity, style
- you can do all of that when you call .plot()
- `**kwargs` -> Line2D properties
- `color` or `c` - can be set to any CSS named color, or Hex codes
- `linewidth` or `lw` - number/float in points
- `linestyle` or `ls` - 'solid', 'dashed', 'dashdot', 'dotted' (-, --, -., :)
- `marker` and `markersize` and `markerfacecolor`

```py
plt.plot(nums, nums, color="dodgerblue")
plt.plot(nums, nums*nums, color="#ff6b6b", linewidth=4)
plt.plot(nums, nums**3, c="#ff9f43", linewidth=4, linestyle="-.")

plt.plot(nums, nums, color="olive", marker="*", markersize=20, markerfacecolor="#ff9f43")
```

### plot labels & titles

- label - the axes, `xlabel` and `ylabel`
- title - give a plot a title
- plt.title() will title the current plot
- `loc` param: left, center, or right
- xlabel - label for the X-Axis
- `labelpad` - defaults to `4.0`, the spacing from the actual axis
- `**kwargs` - you can pass in text properties - opacity, fontsize, fontstyle, rotation
  - for title, xlabel, and ylabel

```py
# after plt.figure() and plt.plot()
plt.title('Title text')

# after plt.figure() and plt.plot() and maybe plt.title()
plt.xlabel("Label text", labelpad=10)
plt.ylabel("Label text", labelpad=10)
```

### changing X & Y ticks

- `xticks`, `yticks`: an array/list of the values you want
- you can also pass in `labels` param
- `xlim`, `ylim`: the x and y limit -

```py
plt.xticks([10, 15, 20, 25, 30], labels=[])
plt.yticks([10, 15, 20, 25, 30], labels=[])
```

### adding legends to plots

- plt.legend(): you need a label for each line
- `loc` param: 'best' is default, but also 'upper right', 'lower left', etc
- lots of other params you can pass in:
  - `shadow=True, frameon=True, facecolor='white'`

```py
plt.figure(figsize=(7, 7))
plt.plot(nums, color="teal", label="x")
plt.plot(nums**2, color="orange", label="x squared")
plt.plot(nums**3, color="purple", label="x cubed")
plt.legend(loc='center right')
```

### creating bar plots

- https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_label_demo.html
- .bar(x, y)
- barh(x, y)
- you can have multiple bars in the same pair of axes

```py
plants = ['Spinach', 'Turnip', 'Rhubarb', 'Broccoli', 'Kale']
died = [10,25,5,30,21]
germinated = [74, 88, 56,69,59]

plt.figure(figsize=(6,6))
plt.bar(plants, germinated, color="orchid")
plt.title("Germination Rates")
plt.ylabel("Number Of Seeldings")

plt.figure(figsize=(6,6))
plt.bar(plants, died, color="#3498db")
plt.bar(plants, germinated, width=0.4, color="#2ecc71", align="edge")

plt.figure(figsize=(6,6))
plt.bar(plants, died, color="#3498db", bottom=germinated,label="Failed Seedlings")
plt.bar(plants, germinated, color="#2ecc71", label="Germinated Seedlings")
plt.legend(shadow=True, frameon=True, facecolor="white")
plt.title("Greenhouse Seedlings")
plt.show()

# horizontal bars using barh()
plt.barh(plants, germinated, color="#2ecc71")
```

### creating histograms

> STOPPED HERE

- matplotlib.pyplot.hist: https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.hist.html
- histogram: distribution of values in a dataset
- `.hist(list)`
- numpy `random.radn(num)`
- `bins` param for hist: # of ranges to divide the data into
- you can also give it a title, change the labels, ticks, color, etc
- get series of a dataframe using pandas, then pass that to .hist()

```py
import matplotlib.pyplot as plt
import numpy as np
plt.hist([1, 1, 2, 5, 5, 3, 3, 4, 4, 4, 6])

nums = np.random.radn(100)
plt.hist(nums)
plt.hist(nums, bins=20)

# multiple histograms: titanic age split up by passenger class
# You can set the alpha from 0-1 for transparency
titanic["age"] = pd.to_numeric(titanic["age"], errors="coerce")
# just age
plt.hist(titanic["age"])

first_class = titanic[titanic["pclass"] == 1]["age"]
second_class = titanic[titanic["pclass"] == 2]["age"]
third_class = titanic[titanic["pclass"] == 3]["age"]
plt.hist(first_class, label="1st Class")
plt.hist(second_class, label="2nd Class", alpha=0.5)
plt.hist(third_class, label="3rd Class", alpha=0.5)
plt.legend()
# it looks horrible - don't do this, at least for this data
```

### creating scatter plots

- matplotlib.pyplot.scatter: https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.scatter.html
- .scatter(x, y)

```py
heights = [137,140,142,145,147,150,152,155,157,160]
f_weights = [28.5,30.8,32.6,34.9,36.4,39,40.8,43.1,44.9,47.2]
m_weights = [34.9,38.1,33.5,35.8,46.7, 42.8,43.1,45.8,50.8,58.9]

plt.scatter(heights, f_weights,  marker="*", label="Female")
plt.scatter(heights, m_weights,marker="d", label="Male")
plt.legend()
plt.xlabel("Height (cm)")
plt.ylabel("Weight (kg)")
```

### creating pie charts

- matplotlib.pyplot.pie: https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.pie.html
- plt.pie(list)
- `autopct` param: a string or Fx used to label the wedges with their numeric value
- `explode` param: choose which element to "extract" out of the pie - pass in a tuple or a list of the same length as the #'s - the value is the offset - `0.1` is ideal
- shadow param looks horrible unless you can style it

```py
labels = ["Turkey", "Potatoes", "Pumpkin Pie", "Stuffing"]
prices = [25.99,3.24,9.50, 6.99]

plt.pie(prices, labels=labels, autopct="%1.1f%%", shadow=True, explode=(0,0,0.1,0))
plt.show()
```

### working with subplots

- https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.subplots.html
- how to create 3 axes in one figure
- `subplot(*args, **kwargs)`
- `subplot(nrows, ncols, index)`: the rows are the rows of axes in a figure - the columns are the # of axes in that row, index 1 is for the first, index 2 is for the 2nd, ...
- `suptitle()` method: title for the entire figure
- `tight_layout()` method: adjust the padding between and around subplots

```py
# create numpy array that goes from 0-4
nums = np.arange(5)
# for 3 cols, make it wider
plt.figure(figsize=(10,4))
# title for entire figure
plt.suptitle("Our First Subplot", fontsize=30)

# 1st plot
plt.subplot(1,3,1) # 1 row, 3 columns, plot for index = 1
plt.plot(nums, nums)
plt.title("X")
# 2nd plot
plt.subplot(1,3,2) # 1 row, 3 columns, plot for index = 2
plt.plot(nums, nums**2, color="red")
plt.title("X Squared")
# 3rd plot
plt.subplot(1,3,3) # 1 row, 3 columns, plot for index = 3
plt.plot(nums, nums**3, color="green")
plt.title("X Cubed")
# Fix  the layout
plt.tight_layout()
plt.show()


nums = np.arange(5)
plt.figure(figsize=(4,10))
plt.suptitle("Our First Subplot", fontsize=30)

# 3 rows x 1 col vs above of 1 row x 3 cols
plt.figure(figsize=(4,10))
plt.subplot(3,1,1)
plt.title("X")
plt.plot(nums, nums)

plt.subplot(3,1,2)
plt.plot(nums, nums**2, color="red")
plt.title("X Squared")

plt.subplot(3,1,3)
plt.plot(nums, nums**3, color="yellow")
plt.title("X Cubed")
plt.tight_layout()
plt.show()

# a 2 rows by 2 cols figure - 4 "axes" in 1 "figure"
# you keep 2, 2 and the index of 1 thru 4 starts top left, ends bottom right
plt.figure(figsize=(8,8))

# subplot for row 1 col 1 (index=1)
plt.subplot(2,2,1)
plt.plot(nums)

# subplot for row 1 col 2 (index=2)
plt.subplot(2,2,2)
plt.plot(nums)

# subplot for row 2 col 1 (index=3)
plt.subplot(2,2,3)
plt.plot(nums)

# subplot for row 2 col 2 (index=4)
plt.subplot(2,2,4)
plt.plot(nums)
```

- `sharex` and `sharey` params
- `plt.subplot` returns a value - an axes object

```py
first_class = titanic[titanic["pclass"] == 1]["age"]
second_class = titanic[titanic["pclass"] == 2]["age"]
third_class = titanic[titanic["pclass"] == 3]["age"]

plt.figure(figsize=(10,4))

ax = plt.subplot(1,3,1)
plt.hist(first_class, label="1st Class", color="#f1c40f", bins=20)
plt.title("1st Class")

plt.subplot(1,3,2, sharey=ax)
plt.hist(second_class, label="2nd Class", color="#3498db", bins=20)
plt.title("2nd Class")

plt.subplot(1,3,3, sharey=ax)
plt.hist(third_class, label="3rd Class", color="#e74c3c", bins=20)
plt.title("3rd Class")
```

<br>

## Revisiting Pandas - plotting

- pandas can plot a dataframe - it will plot each series (column) - but you need a similar unit of measure or metric
- you can use a Matplotlib stylesheet
- .style.available property shows you the available stylesheets
- `df.plot(*args, **kwargs)`
- `kwargs`: kind, figsize, title, legend, ...
- But when y ou use the Pandas shortcut, you don't have the same amount of control as with Matplotlib
- so if you make a chart/plot with Pandas and you've imported MAtplotlib, you can just use MAtplotlib methods below the Pandas plot
- `rename()` method: to rename the labels of series/columns
- good to do right before you plot
- you pass a dictionary -> {index: value}
- easy to make stacked bar plots in Pandas vs Matplotlib
- .plot(kind="bar") or .plot.bar() or .plot.bar(key=value, key=value)
- .plot(kind="barh") or .plot.barh()
- NOTE: you can use Matplotlib params in pandas plot() method and it will be passed to Matplotlib

```py
import pandas as pd
import matplotlib.pyplot as plt

titanic = pd.read_csv('data/titanic.csv')
# parse age as a number
titanic["age"] = pd.to_numeric(titanic["age"], errors="coerce")
houses = pd.read_csv("data/kc_house_data.csv")
ufos = pd.read_csv("data/nuforc_reports.csv", parse_dates=['date_time', "posted"])

# plotting df with Pandas - each series will be plotted on the same axes
houses[["sqft_living", "sqft_lot"]].sort_values("sqft_living", ascending=False).head(10).plot(kind="bar")

plt.style.available
plt.style.use("fivethirtyeight")

titanic.sex.value_counts().plot(kind="bar", title="Gender Breakdown On Titanic")

titanic.sex.value_counts().plot(kind="bar")
# use Matplotlib title method instead
plt.title("My Title", loc="right")

ufos["month"] = ufos["date_time"].dt.month
ufos["year"] = ufos["date_time"].dt.year

# Pandas kwargs
sightings = ufos.month.value_counts().sort_index()
sightings.plot(
    kind="bar",
    title="UFO Sightings By Month",
    xlabel="Month",
    ylabel="Num Sightings",
    fontsize="10")

# Same as above but use Matpltlib for xlabel & ylabel
sightings = ufos.month.value_counts().sort_index()
sightings.plot(
    kind="bar",
    title="UFO Sightings By Month",
    fontsize="10")
plt.xlabel("Month", fontsize=24, color="olive")
plt.ylabel("Num Sightings", fontsize=24)

months_dict = {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7:"Jul", 8: "Aug", 9:"Sep", 10: "Oct", 11: "Nov", 12: "Dec"}
sightings.rename(months_dict) # does not do in place

sightings.rename(months_dict).plot(
    kind="bar",
    title="UFO Sightings By Month",
    fontsize="20")
plt.xlabel("Month", fontsize=24, color="olive")
plt.ylabel("Num Sightings", fontsize=24)

salaries = pd.read_csv("data/Salaries.csv", low_memory=False)

salaries["BasePay"] = pd.to_numeric(salaries["BasePay"], errors="coerce").fillna(0)
salaries["OvertimePay"] = pd.to_numeric(salaries["OvertimePay"], errors="coerce").fillna(0)
salaries["OtherPay"] = pd.to_numeric(salaries["OtherPay"], errors="coerce").fillna(0)

df = salaries[["EmployeeName", "BasePay", "OvertimePay", "OtherPay"]]
df.set_index("EmployeeName", inplace=True)
df.head(10).plot(kind="bar")
# make a stacked bar chart
df.head(10).plot(kind="bar", stacked=True)

# horizontal bar plot
df["BasePay"].sort_values(ascending=False).head().plot.barh(color="red", title="Highest Paid SF Employees")

# on a dataframe
df.sort_values("OvertimePay", ascending=False).head().plot(kind="barh", stacked=True)
```

### pandas plotting challenge #1

- NOTE: you can use Matplotlib params in pandas plot() method and it will be passed to Matplotlib

```py
import pandas as pd
import matplotlib.pyplot as plt
billboard = pd.read_csv("data/billboard_charts.csv", parse_dates=["date"])
plt.style.use("ggplot")

top_10 = billboard[billboard["rank"] == 1]["artist"].value_counts().head(10)

top_10.plot(
    kind="barh",
    title="Artists With Most Weeks At #1",
    figsize=(8,6),
    edgecolor="black",
    linewidth=3
)
plt.xlabel("Weeks At #1")
```

### pandas histograms & box plots

- a histogram visualizes the distribution of data
- you can use multiple series in the same histogram if it makes sense
- df.hist(): makes a separate histogram for each column in the dataframe
- .boxplot: another way to visualize the distribution of values in a column
- box + "whiskers" + "flyers" -> Box & Whisker plot
- whiskers - outliers I think
- YOU HAVE TO GO TO THE mATPLOTLIB DOCS FOR PARAMS (I think that is what he said)

```py
df["BasePay"].plot(kind="hist", bins=200, color="purple") # or
df.plot.hist()

df.hist()

# this makes a box plot for each column in a dataframe
df.plot(kind="box")
df.boxplot()

# box plot for an individual series
houses.bedrooms.plot(kind="box")
houses.bedrooms.plot(kind="box", showfliers=False)
houses[["bedrooms", "bathrooms"]].boxplot(showfliers=False)
```

### pandas line plots

- the default for .plot() is a line plot
- remember you can use KW params from Matplotlib

```py
# get value counts by year, sort by year
ufos.year.value_counts().sort_index().plot(kind="line", color="olive", linestyle=":")

# called on the df but plotting 2 cols against each other
houses.plot.line(x="bedrooms", y="price")
```

### pandas scatter plots & multiple plots on the same axes

- `kind="scatter"` or dataframe method `plot.scatter(x, y)`
- `plt.plot()` one after each other for Matplotlib
- same for pandas
- if you do `.plot()` in a different cell, you get different plots
- same if you add `plt.figure()` in between
- `plt.xlim(min,max)` not as efficient as `.between()`

```py
houses.plot.scatter(x="bedrooms", y="bathrooms")
houses.plot.scatter(x="bedrooms", y="bathrooms", marker="X")

# 2 plots one after another go onto the ame axes
ufos[ufos["state"] == "CA"].year.value_counts().sort_index().plot(label="CA")
ufos[ufos["state"] == "TX"].year.value_counts().sort_index().plot(label="TX")

plt.xlabel("Year")
plt.legend(loc="upper left")
plt.title("UFO Sighting By State")
```

### pandas automatic subplots

- NOT HAVE PLOTS STACKED ON TOP OF EACH OTHER IN THE SAME AXES BUT DESERVE TO BE IS A SINGLE FIGURE
- pandas supports subplots out of the box with the `subplots` kwarg, default is `False`
- each column will get it's own subplot in the figure
- `layout` tuple: `layout=(num_rows, num_cols)`

```py
df.plot(kind="hist", subplots=True, sharex=False, figsize=(5,5))
plt.tight_layout()

axs = df.plot(kind="hist", subplots=True, sharex=False, layout=(1,3), figsize=(10,3), bins=30)
plt.tight_layout()
axs[0][2].set_xlim(0,20000)
axs[0][1].set_title("Middle")
axs[0][0].set_title("First")
axs[0][2].set_title("Third")
```

### manual subplots with pandas

- `.subplots()`
- NOTE: `ax=axs[0][0]` -> nested array
- what is `gca()`?
- what is this syntax: `fig, axs`
- `.suptitle()`

```py
fig, axs = plt.subplots(1,2)

ufos.year.value_counts().sort_index().plot(ax=axs[0])
axs[0].set_title("Sightings By Year")

ufos.month.value_counts().sort_index().plot(kind="bar", ax=axs[1])
axs[1].set_title("Sightings By Month")


months = {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
          7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'}
fig, axs = plt.subplots(2, 3, figsize=(14, 8))
fig.suptitle("UFO sightings by month", fontsize=14)
fig.tight_layout(pad=2)

ufos[ufos.year == 2014].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[0][0], title="2014")
ufos[ufos.year == 2015].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[0][1], title="2015")
ufos[ufos.year == 2016].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[0][2], title="2016")
ufos[ufos.year == 2017].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[1][0], title="2017")
ufos[ufos.year == 2018].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[1][1], title="2018")
ufos[ufos.year == 2019].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[1][2], title="2019")
plt.tight_layout()


jl = billboard[billboard["artist"] == "John Lennon"]["song"].value_counts().head(8)
wings = billboard[billboard["artist"] == "Wings"]["song"].value_counts().head(8)
gh = billboard[billboard["artist"] == "George Harrison"]["song"].value_counts().head(8)
rs = billboard[billboard["artist"] == "Ringo Starr"]["song"].value_counts().head(8)

fig, axs = plt.subplots(2,2, figsize=(14,8))
fig.suptitle("Beatles Solo Songs (By Weeks On Chart)", fontsize=20 )

jl.plot(kind="barh", ax=axs[0][0], color="#fc5c65")
axs[0][0].set_title("John Lennon", color="#fc5c65")

wings.plot(kind="barh", ax=axs[0][1], color="#fd9644")
axs[0][1].set_title("Wings(Paul)", color="#fd9644")

gh.plot(kind="barh", ax=axs[1][0], color="#2bcbba")
axs[1][0].set_title("George Harrison", color="#2bcbba")

rs.plot(kind="barh", ax=axs[1][1], color="#26de81")
axs[1][1].set_title("Ringo Starr", color="#26de81")

plt.tight_layout()
```

### exporting figures with savefig()

- matplotlib.pyplot.savefig - to save images after you run them
- allows you to export a chart
- `savefig("image name")`: it will be saved as a .png in the same folder as the notebook
- you can also set an edge color, change dpi, add padding, meta data, ...

```py
ufos[ufos["shape"] == "light"].year.value_counts().sort_index().plot(label="light", figsize=(10,8), title="UFO Sightings By Shape")
ufos[ufos["shape"] == "fireball"].year.value_counts().sort_index().plot(label="fireball")
ufos[ufos["shape"] == "circle"].year.value_counts().sort_index().plot(label="circle")
ufos[ufos["shape"] == "triangle"].year.value_counts().sort_index().plot(label="triangle")
ufos[ufos["shape"] == "formation"].year.value_counts().sort_index().plot(label="formation")

plt.xlim(2000, 2019)
plt.legend()
plt.savefig("UFO_Shapes")


months = {1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
          7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'}
fig, axs = plt.subplots(2, 3, figsize=(14, 8))
fig.suptitle("UFO sightings by month", fontsize=14)
fig.tight_layout(pad=2)
ufos[ufos.year == 2014].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[0][0], title="2014")
ufos[ufos.year == 2015].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[0][1], title="2015")
ufos[ufos.year == 2016].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[0][2], title="2016")
ufos[ufos.year == 2017].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[1][0], title="2017")
ufos[ufos.year == 2018].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[1][1], title="2018")
ufos[ufos.year == 2019].month.value_counts().sort_index().rename(months).plot(kind="bar", ax=axs[1][2], title="2019")
plt.tight_layout()
plt.savefig("UFO_By_Month")
```

<br>

## Grouping & Aggregating (Matplotlib)

- `.groupby()`
- https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html
- groupby: splits your data into groups based on one or more columns, then lets you apply calculations to each group
  - Think: “Group → then aggregate”
  - “split data into groups and run a function on each group.”
- Common things you do after `groupby()`:
  - `.mean()`
  - `.sum()`
  - `.count()`
  - `.max()` / `.min()`
- **Because `groupby()` does nothing useful on its own — it’s incomplete until you add something after it**.
- `.ngroups`: shows you the number of groups
- `.groups`: shows a dictionary with each group and its indices
- `.first()`: shows the first element in each group
- `get_group()`:
- looping over the group object gives you a tuple which contains the group name and the actual group

```py
import pandas as pd
carstocks = pd.read_csv("data/car_stocks.csv")
carstocks["Close"].mean()
carstocks[carstocks["Symbol"] == "GM"]["Close"].mean()
# Use the Symbol to calculate the average Close price
carstocks.groupby("Symbol")["Close"].mean()

titanic = pd.read_csv("data/titanic.csv")
titanic['age'] = titanic["age"].replace(['?'], [None]).astype('float')

df = titanic[["pclass", "survived", "sex", "age"]]
gbo = df.groupby(by="sex")
gbo = df.groupby("sex")
gbo.ngroups # 2

df.groupby("age").first()
gbo.get_group("male")

for name, group in gbo:
    print(name)
    print("----------")
    print(group)

carstocks.groupby("Symbol")["High"].max()
```

### split-apply-combine

1. "Split" the data into different groups - `groupby`
2. "Apply" FXs or analysis to each group
3. "Combine" the results into a new data structure

- this process is not specific to groupby - groupby is a common/easy way to split things + it has a lot of methods

```py
# .mean() runs on each group - returns a new series
carstocks.groupby("Symbol")["Close"].mean()

# gbo = "Split"
# get average age by sex group = "Apply" + "Combine" into a series
gbo["age"].mean()
# get max age by sex group
gbo["age"].max()
gbo["age"].mean().plot(kind="bar", title="Average Age By Sex")

# group by passenger class, look at age, get mean/average
titanic.groupby("pclass")["age"].mean()

# this returns a dataframe:
titanic.groupby("sex").median()

carstocks.groupby("Symbol")["High"].max()
```

### using the agg method

- `aggregate()` or `agg()`: agg() is more common but the docs have aggregate()
  - `gbo.mean()` is short for `gbo.agg("mean")`
  - `agg()` shines when you want multiple functions
- it allows you to run multiple functions on a `groupby` object
- you can run multiple statistics at once
- this is the _Apply_ portion
- you pass a named function in quotes, you can pass in your own FXs
- you can do this for a specific column and which Fxs you want to run, but have different functions for a different column
  - need a dictionary where the key is the col and the val is a list of FXs

```py
# could just add .min(), but this is an example
titanic.groupby("sex")["age"].agg("min")
# pass in a list of function names
titanic.groupby("sex")["age"].agg(["min", "max", "mean", "median"])

gbo.agg({
    "word_count": ["mean", "max"],
    "images": "sum"
})

# get the min & max for each column in groupby("sex") dataframe
titanic.groupby("sex").agg(["min", "max"])

# different functions for different columns
titanic.groupby("sex").agg({"age": ["min", "max"], "pclass": "mode"})

# different functions for different columns
carstocks.groupby("Symbol").agg({"Open": "mean", "Close": "mean", "Volume": ["mean", "sum"]})
```

### agg with custom functions

- custom functions are not wrapped in quotes

```py
# custom function example
def diff(series):
    return series.max() - series.min()

# diff between highest & lowest age by passenger class
titanic.groupby("pclass")["age"].agg(["min", "max", diff])

# get number of null values in age column
titanic["age"].size - titanic["age"].count()

def count_nulls(series):
    return series.size - series.count()

# number of null values in age by passenger class
titanic.groupby("pclass")["age"].agg(count_nulls)
```

### named aggregation

- named aggregation: a fancy syntax - creates new columns
- instead of providing a dictionary, create a column name as th key set = to a tuple where
  - the first value is the column you are working with
  - the second is the Fx you want to run
- `as_index`

```py
# standard
carstocks.groupby("Symbol").agg({"Open": ["min", "max"],"Close": ["min", "max"], })

# create your own columns,
df.groupby(col).agg(
    new_col_name=(some_other_col, "function_name")
)

# how come these FXs are in quotes but in the exercise they are not?
carstocks.groupby("Symbol").agg(
    min_open=("Open", "min"),
    max_open=("Open", "max"),
    min_close=("Close", "min"),
    max_close=("Close", "max")
)

carstocks.groupby("Symbol", as_index=False).agg({
    "Open": ["min", "max"],
    "Close": ["min", "max"],
})

carstocks.groupby("Symbol").agg({
    "Open": ["min", "max"],
    "Close": ["min", "max"],
})
```

### EXERCISE: groupby

```py
import pandas as pd
import matplotlib.pyplot as plt
stats = pd.read_csv("data/laliga.csv")

# Find the 5 teams that had the most "Red Cards"
# group by team, look at Red Cards, sum them
stats.groupby("Team")["Red Cards"].sum().nlargest(5)

# Find the average number of "Long passes" made by each Position (Goalkeeper, Forward, etc.)
stats.groupby("Position")["Long passes"].mean()

# Find the 10 Shirt numbers that scored the most goals
stats.groupby("Shirt number")["Goals scored"].sum().nlargest(10)

# PART 2
# total shots by each team + on target shots
# Why isn't sum in quotes?
shots = stats.groupby("Team").agg(
    total=("Shots", sum),
    on_target=("Shots on target", sum)
)

# create accuracy column
shots["accuracy"] = shots["on_target"] / shots["total"]

plt.style.use("ggplot")
# 2 rows, 1 col, share the x axis labels
fig, axs = plt.subplots(2,1, figsize=(5,8), sharex=True)
# get top 5 most accurate teams
shots["accuracy"].nlargest().sort_values(ascending=True).plot(
    kind="barh",
    ax=axs[0],
    color="green",
    title="Most Accurate Teams"
)
# get bottom 5 least accurate teams
shots["accuracy"].nsmallest().plot(
    kind="barh",
    ax=axs[1],
    color="red",
    title="Least Accurate Teams"
)
plt.xlabel("On Target Percentage")
```

<br>

## Hierachical Indexing

### groupby with multiple columns

- Multi-Indexing, or Hierchical Indexing
- this comes up a lot, especially with groupby

> I CAN SEE THIS BEING USEFUL

```py
import pandas as pd
carstocks = pd.read_csv("data/car_stocks.csv")

titanic = pd.read_csv("data/titanic.csv")
# fix age & fare values
titanic['age'] = titanic["age"].replace(['?'], [None]).astype('float')
titanic['fare'] = titanic["fare"].replace(['?'], [None]).astype('float')

s1 = titanic.groupby("sex")["age"].mean()
s1.index
# Index(['female', 'male'], dtype='object', name='sex')

# example of a multi-index but the labels are "hierachical"
# group by 2 columns
# when you do this, pclass AND sex are BOTH the index
df = titanic.groupby(["pclass", "sex"]).mean()
df.index
'''
MultiIndex([(1, 'female'),
            (1,   'male'),
            (2, 'female'),
            (2,   'male'),
            (3, 'female'),
            (3,   'male')],
           names=['pclass', 'sex'])
'''

# Aother multi-index example
titanic.groupby(["sex", "age"]).mean()
```

### creating a multiindex with set_index

- you can get a series or dataframe back with a multi-index
- you could also setup your own multi-index any time you want using set_index
  - you just pass in a list

```py
pops = pd.read_csv("data/state_pops.csv")
pops.index
# set state as index - NOT UNIQUE
pops.set_index("state")
# set year as index - NOT UNIQUE
pops.set_index("year")
# set state and year as multi-index - UNIQUE
pops.set_index(["state", "year"])
```

### sorting a multiindex

```py
# sort_index - this will sort level 0 then level 1, ascending
pops.sort_index()
# or descending
pops.sort_index(ascending=False)

# choose which hierarchical level to sort,
# level 0 is the 1st, level 1 2nd, ...
# this will sort all the years, level 0 comes next, it's not years withing level 0
pops.sort_index(level=1)

# combination: sort level 1 descending, then level 0 ascending
pops.sort_index(level=[1, 0], ascending=[False, True])

# but this is probably best:
pops.sort_index() # or
pops.sort_index(inplace=True)
```

### using .loc() with a multiindex

- accessing data out after sorting, accessing rows by their label
- how to get Nevada's population for 2001
- use `.loc[]` for a dataframe to get a row
- **.loc takes the row label, but if you add a comma you can ask for a specific column**

```py
# .loc[some_index_label, some_col_or_list_of_cols]

# get the row with the label of 7
df.loc[7]
df.loc[[7]]

# this returns more than 1 row - returns a subset (just years)
pops.loc["CA"] # or (state and years)
pops.loc[["CA", "AK"]]

# take a slice - all fows from NM to TX
pops.loc["NM": "TX"]

# for a multi-index, pass .loc a tuple - 1 state and 1 year
# though it does work without () but that is not best practice
pops.loc[("MT", 1992)]

# multi-index slice with tuples
pops.loc[("AK", 1990):("AK",1995)]

# This won't work
pops.loc[1990]
# This won't work either
pops.loc[:,1990]

# use year on its own, get all 1990 rows - THIS WORKS
# you need to add a 2nd comma & :
pops.loc[:, 1990, :]
# get a slice instead of a single year
pops.loc[:, [1990,1991], :]
# slice(None) -> same result, different syntax
pops.loc[slice(None), [1990,1991], :]
```

### cross sections with the xs method

- `xs()`: cross-section - an easier way (sometimes) to get a portion of a dataframe that is multi-indexes bu one part of the index

```py
# with .loc - odd syntax
pops.loc[:,2013,:]
# using xs(value, level) -> defaults to level 0
# level as a label
pops.xs(2013, level="year")
# level as a number
pops.xs(2013, level=1)
```

### get_level_values()

- `get_level_values()`: useful if you need to do something using the actual index

```py
# nested list of lists for each level
pops.index.levels
# get a list of the values for a level
pops.index.get_level_values(0)

even_years = pops.index.get_level_values(1) % 2 == 0
pops[even_years]
pops[pops["population"] % 2 == 0]
even_pops = pops["population"] % 2 == 0
pops[even_years & even_pops]
ends_with_a = pops.index.get_level_values(0).str[1] == "A"
pops[ends_with_a]
```

### Hierchical columns

- not common to work with hierarchical columns - multi-index t hough is very common

```py
df = titanic.groupby(["pclass", "sex"]).mean()
df.loc[(2, "male")]

# Hierchical columns names (single level index)
df = titanic.groupby("sex").agg({
    "age": ["min", "max", "mean"],
    "fare": ["min", "max", "mean"],
    "survived": ["mean"]
})

# shows MultiIndex
df.columns
# select the "column" age + mean - use a tuple
df[("age", "mean")]
# or you could do this but it is less efficent
df["age"]["mean"]
```

### stack() and unstack()

- `stack()` and `unstack()`: 2 methods useful when working with mult-indexed data
- `unstack()`: "pivot" one of the muti-level items into a column
- `stack()`: not used as much - is the opposite, turns a column into part of the multi-index

```py
# default is last level gets unstacked
# one row for each state, column for each year
pops.unstack()
# unstack state and leave year as the index
unstacked_df = pops.unstack(level="state")

# bring state back into the multi-index
unstacked_df.stack()
# ???
unstacked_df.stack().unstack()
```

### plotting with unstack

- unstack comes in handy when working with groupby and plotting

```py
titanic.groupby(["pclass", "sex"])["age"].mean().plot(kind="bar")

titanic.groupby(["pclass", "sex"])["age"].mean().unstack()
titanic.groupby(["pclass", "sex"])["age"].mean().unstack().plot(kind="bar")

titanic.groupby(["pclass", "sex"])["age"].mean().unstack(level="pclass")
titanic.groupby(["pclass", "sex"])["age"].mean().unstack(level="pclass").plot(kind="bar")
```

### grouping by index

- group by a portion of the index for a multi-index

```py
# group by by year
pops.groupby(level=1).sum()
# group by by state
pops.groupby(level=0).min()
# group by year then by state (makes no sense for this dataset)
pops.groupby(level=[1, 0]).min()

pops.index
# use the names instead of level numbers
pops.groupby(["year", "state"]).min()
```

<br>

## Working with Text

- strings / text -> Dtype = Object
- any data, including lists, can be stored in an Object column
- "string" is a data type in Pandas
- objects can store any data type

### upper, lower, and capitalize

- you can run methods on individual values
- for string methods, you access under `str.`
- similar to `.dt` when working with dates
- `str.upper()`
- `str.lower()`
- `str.capitalize()`
- `str.len()`

```py
titanic["name"].str.len() # get the character length
titanic["name"].str.upper()
titanic["lower_name"] = titanic["name"].str.lower()
titanic.lower_name.str.capitalize()
```

### indexing string series with []

- `col.str[0]`

```py
# this makes a new series
titanic["cabin"].str[0]

titanic["deck"] = titanic["cabin"].str[0]
titanic.groupby("deck").mean()
```

### stripping whitespace with Strip()

- `series.str.strip()` - remove whitespace, any leading or training whitespace chars
- `to_strip` - provide a list of chars to strip - the default is whitespace chars
- `series.str.lstrip()` - only remove from beginning (left)
- `series.str.rstrip()` - only remove from end (right)

```py
s = pd.Series(['1. Hawk.  ', '2. Pickle!\n', '3. Melonhead?\t'])
s.str.strip()
s.str.strip(to_strip="123. \n \t")
s.str.lstrip()
s.str.strip(to_strip="123.")

titanic.caabin.str[1:]
```

### splitting text values with Split()

- `col.str.split()` - returns a list or a dataframe
- default is to split on spaces
- `expand` - if True, a column for the man len() of the lists with index numbers as columns headers - **returns a dataframe**
- `n`: dictate how many times it can split
- you can also use RegEx to split on
  str.rsplit() - split starting from the right

```py
# this returns a series & each row contains a list
titanic["home.dest"].str.split("/")
# make cols
titanic["home.dest"].str.split("/", expand=True)
# add 1st elemnt to the data frame
titanic["home"] = titanic["home.dest"].str.split("/", expand=True)[0]
# 2nd element add to df
titanic["destination"] = titanic["home.dest"].str.split("/", expand=True)[1]

titanic["home"].value_counts()
titanic["destination"].value_counts()
# only split on forward slash once
titanic["home.dest"].str.split("/", n=1, expand=True)
```

### replacing portions of strings with Replace()

- `col.str.replace()`: to replace a portion of a string
- replace: can also be a Fx
- `regex`
- `.group()`: what you are replacing
- `case`

```py
# str.replace(pattern, replace)
# str.replace(pattern, replace, regex=True)
ufos = pd.read_csv("data/nuforc_reports.csv")
ufos["duration"].str.replace("seconds", "s")
ufos["duration"].str.replace("seconds|minutes", "", regex=True)
# run this in a separate cell
def abbrv(reo):
    return reo.group()[0]

ufos["duration"].str.replace("seconds|minutes|hours", abbrv)
```

### testing strings with Contains()

- `col.str.contains()` - boolean check for a substring, leaves `NaN`
- `na` - replaces na values with whatever you set it equal to

```py
ufos["duration"].str.contains("hour")
# this handles na values, prevents errors
ufos[ufos["duration"].str.contains("day|week|month", na=False)]
```

<br>

## Apply, Map, and Applymap

### applying functions to series

- .apply() - there is both a series and a dataframe apply method
- `pd.Series.apply()`: takes a Fx and invokes it on every value in the series and returns a new series

> Would I use this to calc the various fields I need or is it overkill

```py
# use can also use .apply() for regular Python methods like len()
titanic["name"].apply(len)
# NOTE: Prefer .str.method() over .apply() for strings because it is faster
# If .str exists → use it. Only use .apply() for functions or custom logic.

def years_to_days(yrs):
    return yrs * 365

titanic["age"].apply(years_to_days)
# Although you couls just do titanic["age"] * 365

def get_age_group(age):
    if age < 2:
        return "infant"
    elif age < 12:
        return "child"
    elif age < 18:
        return "teen"
    elif age < 65:
        return "adult"
    else:
        return "senior"

titanic["age_group"] = titanic["age"].apply(get_age_group)
titanic.age_group.value_counts()
titanic.groupby("age_group").survived.mean()
titanic.groupby(["age_group", "sex"]).survived.mean()
```

### Apply() with Lambdas & arguments

- you can use .apply() with FXs that need args using `args`
- `args` needs to be a tuple

```py
# convert to today's rates (multiple by 24)
titanic["fare"] * 24
# use a lambda
titanic["fare"].apply(lambda x: f"${x * 24}")

# pass arguments
def convert_currency(num, multiplier):
    return f"${num * multiplier}"

# apply will pass the values in "fare" as the first arg
titanic["fare"].apply(convert_currency, args=(24,))
```

### Apply() with dataframes: columns

- `pd.Dataframe.apply()`: the dataframe version is more complicated
- if you don't specify a direction/axis, it defaults to 0 (columns)

```py
df = titanic[["pclass", "survived", "age", "fare"]]

def get_range(s):
    return s.max() - s.min()

df.apply(get_range)
# default axis is 0
df.apply(get_range, axis=0)
```

### Apply() with dataframes: rows

- FXs across rows - each row becomes a series
- `axis`: 0 = columns, 1 = rows

```py
df.apply(get_range, axis=1)

def get_fam_size(s):
    fam_size = s.sibsp + s.parch
    if fam_size == 0:
        return "solo"
    elif fam_size < 5:
        return "average"
    else:
        return "large"

titanic.apply(get_fam_size, axis=1)

titanic["fam_size"] = titanic.apply(get_fam_size, axis=1)

titanic["fam_size"].value_counts()
titanic.groupby("fam_size").survived.mean()
titanic.groupby(["fam_size", "sex"]).survived.mean()
```

### the series Map() method

- `.map()`: only exists on series - maps a series of values to another series of values based on a Fx or a dictionary
- you can not supply a dictionary for the series apply() method

```py
# pass a dictionary
titanic["pclass"].map({1: "1st", 2: "2nd", 3: "3rd"})
# use a lambda Fx
titanic["age"].map(lambda a: a < 18)
```

### the applymap() method

- `.applymap()`: not used that much - returns a dataframe I think
- it is a dataframe only method
- it takes a Fx and runs it for every value in the dataframe - that means you need homogeneous data or datatypes

```py
# use it for text columns
titanic[["name", "sex", "age_group"]].applymap(str.upper)

# these examples are weak
# df is pclass, survived, age, fare
df.applymap(lambda el: el * 7) # vs just:
df * 7
# get the length of the strings
titanic[["name", "sex", "age_group"]].applymap(len)
```

<br>

## Combining Series and Dataframes

### concatenating series

- you can join series and datasets
- joining series is really important
- `.concat()`: is a pandas method, not a series or dataframe method
- for a series, they are stacked on top of each other
- **NOTE**: the individual indices are preserved from the original series
- `ignore_index`
- can mix series of any data type but it will result in 'object'

```py
# pd.concat([series1, series2, series2, ...])

s1 = pd.Series(['a', 'b', 'c'])
s2 = pd.Series(['d', 'e', 'f', 'z'])

pd.concat([s1,s2])
'''
0    a
1    b
2    c
0    d
1    e
2    f
3    z
'''

# use a range index
pd.concat([s2, s1], ignore_index=True)
```

### concatenating series by index

- concat side by side instead of stacking to make a dataframe
- `axis` - default is 0 for stacking/series

```py
c1 = pd.Series(["red", "orange", "yellow"])
c2 = pd.Series(["green", "blue", "purple"])
pd.concat([c1,c2], axis=1)
'''
       0	    1
0	red	    green
1	orange	blue
2	yellow	purple
'''

fruits = pd.Series(
    data=["apple", "banana", "cherry"],
    index=["a","b", "c"]
)

animals = pd.Series(
    data=["badger", "cougar", "anaconda"],
    index=["b", "c", "a"]
)
# matches the provided indices
pd.concat([fruits, animals], axis=1)
# this renames the columns 0, 1 to fruit, animal
pd.concat([fruits, animals], axis=1, keys=["fruit", "animal"])
'''
      0	         1
a	apple	anaconda
b	banana	badger
c	cherry	cougar
'''

pd.concat([fruits, animals], axis=0, keys=["fruit", "animal"])
```

### inner vs. outer joins

- what happens when your data does not match up
- what if there is not a one-to-one matchup?
- non-matching fields get filled with `NaN`
- use `join` param
- like SQL, `outer` (default) `join` keeps everything, `inner` only matching

```py
fruits = pd.Series(
    data=["apple", "banana", "cherry", "durian"],
    index=["a","b", "c", "d"]
)

animals = pd.Series(
    data=["badger", "cougar", "anaconda", "elk", "pika"],
    index=["b", "c", "a", "e", "p"]
)
# this stacks (series)
pd.concat([animals, fruits], ignore_index=True)
# this creates a dataframe with NaN for some fields
pd.concat([animals, fruits], axis=1)

# only outputs where both series have a matching index
pd.concat([animals, fruits], axis=1, join="inner")
```

### concatenating dataframes by columns

- `axis=0` is default so stacks

```py
harvest_21 = pd.DataFrame(
    [['potatoes', 900], ['garlic', 1350], ['onions', 875]],
    columns=['crop', 'qty']
)

harvest_22 = pd.DataFrame(
    [['garlic', 1600], ['spinach', 560], ['turnips', 999], ['onions', 1000]],
    columns=['crop', 'qty']
)

# combine both dataframes, preserves original indices
pd.concat([harvest_21, harvest_22], ignore_index=True)
# createhierchical index
pd.concat([harvest_21, harvest_22], keys=[2021, 2022])

harvest_23 = pd.DataFrame(
    [['potatoes', 900, 500], ['garlic', 1350, 1200], ['onions', 875, 950]],
    columns=['crop', 'qty', 'profit']
)
# NaN for profit in 21 & 22
pd.concat([harvest_21, harvest_22, harvest_23])
# lose profile column - the columns must exist for all 3
pd.concat([harvest_21, harvest_22, harvest_23], join="inner")
```

### concatenating dataframes by index

- `axis=1`: concat 2 dataframes along the other axis using the index

```py
livestock = pd.DataFrame(
    [['pasture', 9], ['stable', 3], ['coop', 34]],
    columns=['location', 'qty'],
    index=['alpaca', 'horse', 'chicken']
)
weights = pd.DataFrame(
    [[4,10], [900, 2000], [1.2, 4], [110, 150]],
    columns=['min_weight', 'max_weight'],
    index=['chicken', 'horse', 'duck', 'alpaca']
)
# NaN fields
pd.concat([livestock, weights])
# combo - only index labels (unique, no repeats), NaN for duck
pd.concat([livestock, weights], axis=1)
# lose the duck row, only the rows that match between dataframes
pd.concat([livestock, weights], axis=1, join="inner")
```

### the dataframe Merge() method

- merge() - more powerful than concat when it comes to combining dataframes
- merge is a SQL or database-style join - merge 2 dataframes and merge them on sole column where the values are equal (or multiple columns)
- it is a dataframe method

```py
teams = pd.DataFrame(
    [
        ["Suns", "Phoenix", 20, 4],
        ["Mavericks", "Dallas", 11,12],
        ["Rockets", "Houston", 7, 16],
        ['Nuggets', "Denver", 11, 12]
    ],
    columns=["team", "city", "wins", "losses"]
)

cities = pd.DataFrame(
    [
        ["Houston", "Texas", 2310000],
        ["Phoenix", "Arizona", 1630000],
        ["San Diego", "California", 1410000],
        ["Dallas", "Texas", 1310000]
    ],
    columns=["city", "state", "population"]
)
# left_df.merge(right_df)
# no Denver or San Diego - merge on common column "city"
teams.merge(cities)
```

### Merge() with left, right, inner, and outer joins

- `on`: label or list - if not provided, will merrge on a common column
- often you want to specify one or more columns to join on
- the default type of merge is `inner` - the intersection of keys from both frames, similar to a sql inner join, preserve the order of the keys on the left
- `how` param: allows the type of merge - left, right, outer, inner, cross
- `left` join: take all the keys/values from the left DF regardless if there is an intersection or not - `NaN` for some fields in no match
- `right` join: same as above but preference for the right DF
- `outer` join: all records

```py
teams.merge(cities, on="city")
# default, same result
teams.merge(cities, on="city", how="inner")

# all teams
teams.merge(cities, how="left")
# all cities
teams.merge(cities, how="right")
# both dataframes
teams.merge(cities, how="outer")

cities.merge(teams, on="city", how="left")
teams.merge(cities, on="city", how="right")
```

### Merge() On and Suffixes arguments

- `on`: what column(s)
- `suffixes`: defaults to `_x` and `_y`
- when you are joining on a colun or columns but there is 1 or more columns with the same label - provide your own tuple of suffixes

```py
midterms = pd.DataFrame(
    [['alex', 'padilla', 92], ['rayna', 'wilson', 83], ['juan', 'gomez', 78], ['angela', 'smith', 66],['stephen', 'yu', 98]],
    columns=['first', 'last', 'score']
)
finals = pd.DataFrame(
    [['alex','padilla', 97, False], ['rayna', 'wilson', 88, False], ['alex', 'smith', 86, True], ['juan', 'gomez', 71, True], ['stephen', 'yu', 78, False], ['sakura', 'steel', 100, True]],
    columns=['first', 'last','score', 'extra_credit']
)
# this is bad
midterms.merge(finals, on="score")
# this can be bad as well
midterms.merge(finals, on="first")
# this - join on first and last name - returns score_x and score_y
midterms.merge(finals, on=["first", "last"], how="inner")
# provide your own suffixes
midterms.merge(finals, on=["first", "last"], how="inner", suffixes=("_midterms", "_finals"))
combo = midterms.merge(finals, on=["first", "last"], how="inner", suffixes=("_m", "_f"))

combo["avg"] = (combo["score_m"] + combo["score_f"]) / 2

combo.loc[combo["extra_credit"] == True, 'avg'] += 5
```

<br>

## Seaborn notes and snippets

Sections 20-22

- load_dataset()
- replot()
- displot()
- catplot
- set_style()
- despine()

## Seaborn

- [Seaborn](https://seaborn.pydata.org/)
- [Tutorials](https://seaborn.pydata.org/tutorial.html)
- [API](https://seaborn.pydata.org/api.html)
- you can use Seaborn with many languages, not just Python and Jupyter (?)
- it is a data viz library for python
- it is built on top of Matplotlib
- you can easily plot multiple columns against each other with a single method call
- it works very well with pandas
- it comes with Anaconda just like Pandas and Matplotlib
- He does not cover Numpy. When would I want to use Numpy?

### load_dataset()

- `load_dataset()`: fetches the dataset, returns a Pandas dataframe
- you can grab datasets from [seaborn-data](https://github.com/mwaskom/seaborn-data)
- how does seaborn now to go to that repo?

```py
# How do I "import" these into a Notebook without Anaconda?
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# load_dataset(file_name)
# this is not the normay way - use pd.read_csv
tips = sns.load_dataset("tips")
penguins = sns.load_dataset("penguins")
```

### seaborn scatterplots

- `scatterplot()`:
- `data`: the dataset
- `x`: col for x-axis
- `y`: col for y-axis
- many chart types require data, x and y
- `hue`: 3rd column - many Seaborn methods expect it
- `style` param: 4th col
- `size` param:

```py
# use default Seaborn theme
sns.set_theme()

sns.scatterplot(data=tips, x="total_bill", y="tip")
# 3rd column/param "hue"
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="smoker")
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="sex")
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="day")
# 4th col/param "Style"
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="sex", style="time")
# you can set hue and style to be the same col
sns.scatterplot(data=tips, x="total_bill", y="tip", hue="sex", style="sex")
# size param
sns.scatterplot(data=tips, x="total_bill", y="tip", size="size")
sns.scatterplot(data=tips, x="total_bill", y="tip", size="size", hue="sex")
```

### seaborn lineplots

- similar to scatterplots - pass in `data`, `x` column, `y` column, and hue or size or style
- time-related data is best for Line Plots
- `lineplot()`:
- `estimator` param: set to mean by default,
- **IMPORTANT**: it assumes your x-axis is sorted but Seaborn does it automatically, where Pandas you need sort_index
- `parse_dates`: handed over to Pandas
- `ci` param: confidence interval - set to `None`

```py
flights = sns.load_dataset("flights")
# this plots the average for all the months (default behavior)
# and it add a confidence interval
sns.lineplot(data=flights, x="year", y="passengers")

flights.groupby("year")["passengers"].mean().plot()
# show sum instead of default mean
sns.lineplot(data=flights, x="year", y="passengers", estimator="sum")
# example without Seaborn - grouping by year
flights.groupby("year")["passengers"].mean().plot()
# the only other column is "month"
sns.lineplot(data=flights, x="year", y="passengers", hue="month")

trips= sns.load_dataset("taxis", parse_dates=["pickup", "dropoff"])
trips["hour"] = trips["pickup"].dt.hour

sns.lineplot(data=trips, x="hour", y="total", hue="payment", style="color", ci=None)
```

### replot() method

- `replot()`: relational - scatterplots & line plotsm can make subplots
- you need to pass in `kind`: has to be scatter or line
- axes-level functions - makes 1 axes
- figure-level vs axes-level functions
- displot: distribution - histplot, kdeplot, ecdfplot, rugplot
- catplot: categorical - stripplot, swarmplot, boxplot, violinplot, pointplot
- relplot makes a FacetGrid - a grid of subplots
- add a `col` or `row` param, or both - you can not do this with the scatterplot() method
  - `col` and `row` creates subplots
- relplot is a figure level method where scatterplot is an axes-level method
- relplot is one of three figure-level methods

```py
# default kind for relplot() is scatter
sns.relplot(data=tips, x="total_bill", y="tip")
# add col
sns.relplot(data=tips, x="total_bill", y="tip", kind="scatter", col="sex")
sns.relplot(data=tips, x="total_bill", y="tip", kind="scatter", hue="smoker", col="sex")
# add row and col
sns.relplot(data=tips, x="total_bill", y="tip", kind="scatter", hue="smoker", col="sex", row="time")
# line plot
sns.relplot(data=trips, x="hour", y="total", kind="line", col="pickup_borough", hue="payment")
# this makes 20 plots
sns.relplot(
    data=trips,
    x="hour",
    y="total",
    kind="line",
    col="pickup_borough",
    hue="payment",
    row="dropoff_borough"
)
```

### resizing seaborn plots: aspect & height

- setting the figsize on plt only works for axes-level, relplot makes its own figure so setting figsize has no effect
- `height` params: in inches for each facet/grid size, not the overall figure
- `aspect` param: default is 1 so width = height, 2 is width 2 X's the height

```py
# set the figsize for Seaborn
plt.figure(figsize=(8,5))
sns.lineplot(data=flights, x="year", y="passengers", hue="month")

sns.relplot(
    data=tips,
    x="total_bill",
    y="tip",
    kind="scatter",
    hue="smoker",
    col="day",
    row="sex",
    height=3,
    aspect=1.5
)
```

### seaborn histograms

- distribution plots - visualize t he distribution of data
- `multiple`: set to stack, or dodge (side-by-side)
- `binwidth`:
- `element`: step
- kde curve: kernal density estimation (looks cool) - a continuous curve
- `palette`:

```py
# basic
sns.histplot(data=tips, x="tip")
sns.histplot(data=tips, x="tip", hue="time")
# enable the columns to stack
sns.histplot(data=tips, x="tip", hue="smoker", multiple="stack")
# enable the columns to go side-by-side with dodge
sns.histplot(data=tips, x="tip", hue="smoker", multiple="dodge")

# binwidth & bins
sns.histplot(data=penguins, x="body_mass_g", binwidth=200)
sns.histplot(data=penguins, x="body_mass_g", bins=20)
# hue & multiple
sns.histplot(data=penguins, x="body_mass_g", bins=20, hue="species", multiple="stack")
# element
sns.histplot(data=penguins, x="body_mass_g", bins=20, hue="species", multiple="stack", element="step")
# kde curve
sns.histplot(data=tips, x="tip", kde=True)

sns.set_theme()
plt.figure(dpi=200)
sns.histplot(
    data=penguins,
    x="body_mass_g",
    hue="species",
    multiple="stack",
    palette="muted",
    bins=20,
    kde=True
)
plt.title("Penguin Body Mass")
```

### KDE plots

- KDE plots: also a distribution plot
- kdeplot(): makes a kde curve on a plot
- you can overlay a kde curve onto a histogram or you can make your own kde curve
- `bw_adjust`: whether the curve is smooth or jagged?

```py
sns.kdeplot(data=penguins, x="body_mass_g")
sns.kdeplot(data=penguins, x="body_mass_g", hue="species")
sns.kdeplot(data=penguins, x="body_mass_g", hue="species", bw_adjust=0.4)
sns.kdeplot(data=penguins, x="body_mass_g", hue="species", multiple="stack")
```

### bivariate distribution plots

- all the histograms so far have been univariate which is just looking at the distribution for a single feature
- bivariate histograms/kde plots - they have an x and a y axis, the distribution of 2 separate factors
- you read them like a heat map - darker colors means a higher density

```py
# univariate histogram examples
sns.histplot(data=penguins, x="flipper_length_mm")
sns.histplot(data=penguins, x="body_mass_g")

# bivariate histogram
sns.histplot(data=penguins, x="body_mass_g", y="flipper_length_mm")
# bivariate kde plot
sns.kdeplot(data=penguins, x="body_mass_g", y="flipper_length_mm")
sns.kdeplot(data=penguins, x="bill_length_mm", y="flipper_length_mm", hue="species")
```

### rugplots

- `rugplot()`: they are used with other plots (do right below main plot)
- just ticks marks at the x and/or y axis
- they help visualize the density
- `height`: proportion relative to the entire height of the plot - `1` takes up the entire height (leave the default)
- `s`:
- `alpha`: opacity of the lines

```py
sns.rugplot(data=tips, x="tip")
sns.rugplot(data=tips, x="tip", height=0.2)
# on y-axis
sns.rugplot(data=tips, y="tip")
# kde and rug plots
sns.kdeplot(data=tips, x="total_bill")
sns.rugplot(data=tips, x="total_bill", height=0.05)
# scatter and rug plots, both axes for rugplot
sns.scatterplot(data=tips, x="total_bill", y="tip")
sns.rugplot(data=tips,x="total_bill", y="tip")

diamonds = sns.load_dataset("diamonds")
sns.scatterplot(data=diamonds, x="carat", y="price", s=5)
sns.rugplot(data=diamonds, x="carat", y="price", lw=1, alpha=.005)
```

### displot() method

- not to be confusted with `distplot()` with a _t_ which is deprecated
- `displot()`: figure-level plotting methods like relplot
- need the `kind` param
- How does `col` and `y` differ?

```py
# histogram displot - this one could just use histplot()
sns.displot(kind="hist", data=penguins, x="body_mass_g", height=4, aspect=1.5)
# better example of hist displot
sns.displot(
    kind="hist",
    data=penguins,
    hue="sex",
    x="body_mass_g",
    col="species"
)
# kde displot
sns.displot(data=tips, kind="kde", x="tip", col="time", rug=True)
sns.displot(data=tips, kind="kde", x="total_bill", y="tip", rug=True)
```

<br>

## Seaborn Categorical plots

### countplot

- countplot(): similar to a histogram - it shows the distribution of occurrences of certain values in the data
- it works best with categorical data, aka non-numeric values
- it does value_Counts behind the scenes
- "categorical data" does not have to be category data type

```py
# count + plot occurrences of each species, then secies + sex
sns.countplot(data=penguins, x="species")
sns.countplot(data=penguins, x="species", hue="sex")

titanic = pd.read_csv("data/titanic.csv")
# NOTE: not loading a dataset from Seaborn!!!
sns.countplot(data=titanic, x="pclass", hue="sex")
sns.countplot(data=titanic, y="pclass", hue="sex")
```

### stripplot and swarmplot

- these are in the catplot figure-level plots - strip and form are 2 types
- all the types help plot data where at least one axis is categorical
- stripplot()
- swarmplot(): the problem with this method is that it plots every single pointa without overlaps - it plots each point horizontally for the same value
  - if the dataset is too large, your notebook will get hung up
  - you use swarm plots when you have more "manageable" datasets

```py
# example of scatter plots for a categorical column
sns.scatterplot(data=trips, x="pickup_borough", y="distance")

plt.figure(dpi=100)
# the x-axis is categorical, but this example is too dense
sns.stripplot(data=trips, x="pickup_borough", y="distance")
plt.title("Taxi Trip Distance By Burough")

# reduce the record count to 600
trips_sample = trips.nlargest(600, "total")
# adjust figsize to be wider if you get a warning
plt.figure(figsize=(12,5))
sns.swarmplot(data=trips_sample, x="pickup_borough", y="distance")
plt.title("Taxi Trips By Borough")

titanic = sns.load_dataset("titanic")
plt.figure(figsize=(12,5))
# stripplot does not look as good for this dataset
sns.swarmplot(data=titanic, x="pclass", y="age")
sns.swarmplot(data=titanic, x="pclass", y="age", hue="sex")
```

### boxplots

- boxplots: a good way to quickly visualize distributions, especially when you have multiple levels of some categorical value
- they make it easy to visualize distributions from 1 value to the next
- Q1: 25%, 25th percentile
- Q13: 75%, 75th percentile
- there is a line at the median value
- interquartile range (IQR): diff between Q1 and Q3
- the Whiskers on either side are rrelative to the IQR
- 1.5 x IQR for Seaborn
- the Whiskers range are not the bounds of the distribution, you will still have outliers
- so the "box" is Q1 to Q3 with the median line
- NOTE: the length (distance from the box) of whiskers indicates the distribution as well
- `whis`: to change the size of the whiskers (how far away they are)
- `fliersize`: the outliers (?) - controls their size I think
- `color`: 0 is black, 1 is white

```py
# simple box plot
sns.boxplot(data=titanic, x="age")
# with x and y axis
sns.boxplot(data=trips, x="pickup_borough", y="total")
sns.boxplot(data=trips, x="pickup_borough", y="total", whis=2.5, fliersize=2)
# example using fliersize
sns.boxplot(data=titanic, x="pclass", y="age", hue="sex", fliersize=5)
# combo of box plot and swarm plot
sns.boxplot(data=penguins, x="species", y="body_mass_g")
sns.swarmplot(data=penguins, x="species", y="body_mass_g", color="0.3")
```

### boxenplots

- boxenplots: very similar to the box plot
- better for large datasets that have a lot of outliers
- you have the box with the median line
- each successive box contins have of the remaining data points
- you don't see these plots a lot

```py
sns.boxplot(data=trips, x="pickup_borough", y="total")

plt.figure(figsize=(10,6))
sns.boxenplot(data=trips, x="pickup_borough", y="total")
```

### violinplots

- violins are similar to a box plot, usually across a categorical col
- it's a box plot with a median and whiskers - on either side is a kde
- it matters what you set for x and y - the x-axis should have a small number of variations
- hue: the default is to give 2 separate violins, assuming the hue has 2 values - fi fix that use:
- `split=True`:

```py
sns.violinplot(data=titanic, x="age")
# sns.boxplot(data=titanic, x="age")

# with x & y axis
sns.violinplot(data=titanic, x="pclass", y="age")

sns.violinplot(data=titanic, x="pclass", y="age", hue="sex")

plt.figure(figsize=(10,4))
sns.violinplot(data=titanic, x="pclass", y="age", hue="sex", split=True, palette="muted")
```

### barplots

- `estimator`: to use something other than mean
- error bar: uncertainty around the measurement
- `dodge`: when using hue, they share the space but if you set dodge to `False` they stack
- `orient`: rotate the plot, vertical or horizontal (v|h).
- `ci`: to control uncertainty bar

```py
# these show the mean by default for the y-axis
sns.barplot(data=trips, x="pickup_borough", y="distance")
sns.barplot(data=trips, x="pickup_borough", y="total")

# set the y-axis to sum
sns.barplot(data=trips, x="pickup_borough", y="total", estimator=sum)
# how to do above in pandas
trips.groupby("pickup_borough")["total"].sum().plot(kind="bar")

# add a hue
sns.barplot(data=trips, x="pickup_borough", y="distance", hue="color")
# using dodge
sns.barplot(data=trips, y="pickup_borough", x="distance", hue="color", dodge=False)
# using orient
sns.barplot(data=titanic, y="pclass", x="survived", orient="h")
```

### catplot method

- catplot - figure-level plot method for categorical plots
- to create plots at the figure level for the types above
- you can provide columns and rows for sub plots
- also height and aspect
- `ci=None`: turn off the confidence interval bars

```py
# basic bar plot
sns.catplot(data=titanic, x="sex", y="survived", kind="bar")
# use col to create sub plots, or facets
sns.catplot(data=titanic, x="sex", y="survived", kind="bar", col="pclass")
# however, hue is better than col for this data
sns.catplot(data=titanic, x="pclass", y="survived", kind="bar", hue="sex")

sns.catplot(
    data=trips,
    kind="strip",
    x="pickup_borough",
    y="distance",
    col="color",
    aspect=0.8
)
# variation as violin plot
sns.catplot(data=trips, kind="violin", x="pickup_borough", y="distance", hue="color", split=True)

# bar example - "who" column
sns.catplot(
    data=titanic,
    kind="bar",
    x="who",
    y="survived",
    col="pclass",
    ci=None,
)
```

<br>

## Controlling Seaborn Aestetics

### changing seaborn themes

- there are 5 built-in themes in Seaborn though they are very similar
- there are 2 ways to load the themes
- `set_style()` is the simplest way
- there are a lot of params you can addd to customize them
- `set_theme()` - the other way, but you need the `style` key/param but you can add other params

```py
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

tips = sns.load_dataset("tips")

# The 5 themes: "white", "dark", "whitegrid", "darkgrid", "ticks"
sns.set_style("white")
sns.scatterplot(data=tips, x="total_bill", y="tip")

sns.set_style("whitegrid")
sns.scatterplot(data=tips, x="total_bill", y="tip")

sns.set_style("dark")
sns.scatterplot(data=tips, x="total_bill", y="tip")

sns.set_style("darkgrid")
sns.scatterplot(data=tips, x="total_bill", y="tip")

sns.set_style("ticks")
sns.scatterplot(data=tips, x="total_bill", y="tip")

# set_theme
sns.lineplot(data=tips, x="total_bill", y="tip")
sns.set_theme(style="darkgrid")
```

### customizing styles with set_style()

- `axes_style()`: view all the current styles that are controlled by Seaborn for the current theme
- it shows the params you can change
- use `set_style` to make those changes
- `rc` param: he didn't use this? He used a dictionary instead???
- all plots below will take on that theme with any changes you made

```py
sns.axes_style()

sns.lineplot(data=tips, x="total_bill", y="tip")
sns.set_style({'axes.facecolor': '#FC427B', 'grid.color': '#9AECDB'})

# set theme then add changes
sns.set_style("ticks", {'axes.facecolor': '#FC427B', 'grid.color': '#9AECDB'})

# ay any point you can get rid of the changes by choosing a diff theme
sns.set_style("darkgrid")
sns.scatterplot(data=tips, x="total_bill", y="tip")
```

### altering spines with despine()

- `despine()`: to remove the spines from top and right (default) of plots, or to remove all spines - on the CURRENT figure only
- the spines are the borders of the plot
- `bottom`
- `top`

```py
sns.set_style("white")
sns.histplot(data=tips,x="total_bill")
# remove top and right spines
sns.despine()

sns.histplot(data=tips,x="total_bill")
# remove all 4 spines
sns.despine(bottom=True, top=False)
```

### changing color palettes

- using existing built-in color palettes
- the easiest way to find the total list is to provide an invalid name to set_palette
- `set_palette()`: for the lines, the markers, the boxes, etc
- `color_palette()`: pass it an existing name to see color swatches
- `palette`: to use a different palette for one plot - setting it does not work for a single line
- `color`: use this for a single line
- `log_scale`:
- `blend_palette()`:

<br>

#### Existing palettes

```py
# (deep, muted, bright, pastel, dark, colorblind)
sns.set_palette("muted")
sns.barplot(data=tips, x="day", y="total_bill")

sns.set_palette("pastel")
sns.barplot(data=tips, x="day", y="total_bill")

sns.set_palette("dark")
sns.barplot(data=tips, x="day", y="total_bill")

# See all the paettes
sns.set_palette("invalid")
# Accent', 'Accent_r', 'Blues', 'Blues_r', 'BrBG', 'BrBG_r', 'BuGn', 'BuGn_r', 'BuPu', 'BuPu_r', 'CMRmap', 'CMRmap_r', 'Dark2', 'Dark2_r', 'GnBu', 'GnBu_r', 'Greens', 'Greens_r', 'Greys', 'Greys_r', 'OrRd', 'OrRd_r', 'Oranges', 'Oranges_r', 'PRGn', 'PRGn_r', 'Paired', 'Paired_r', 'Pastel1', 'Pastel1_r', 'Pastel2', 'Pastel2_r', 'PiYG', 'PiYG_r', 'PuBu', 'PuBuGn', 'PuBuGn_r', 'PuBu_r', 'PuOr', 'PuOr_r', 'PuRd', 'PuRd_r', 'Purples', 'Purples_r', 'RdBu', 'RdBu_r', 'RdGy', 'RdGy_r', 'RdPu', 'RdPu_r', 'RdYlBu', 'RdYlBu_r', 'RdYlGn', 'RdYlGn_r', 'Reds', 'Reds_r', 'Set1', 'Set1_r', 'Set2', 'Set2_r', 'Set3', 'Set3_r', 'Spectral', 'Spectral_r', 'Wistia', 'Wistia_r', 'YlGn', 'YlGnBu', 'YlGnBu_r', 'YlGn_r', 'YlOrBr', 'YlOrBr_r', 'YlOrRd', 'YlOrRd_r', 'afmhot', 'afmhot_r', 'autumn', 'autumn_r', 'binary', 'binary_r', 'bone', 'bone_r', 'brg', 'brg_r', 'bwr', 'bwr_r', 'cividis', 'cividis_r', 'cool', 'cool_r', 'coolwarm', 'coolwarm_r', 'copper', 'copper_r', 'crest', 'crest_r', 'cubehelix', 'cubehelix_r', 'flag', 'flag_r', 'flare', 'flare_r', 'gist_earth', 'gist_earth_r', 'gist_gray', 'gist_gray_r', 'gist_heat', 'gist_heat_r', 'gist_ncar', 'gist_ncar_r', 'gist_rainbow', 'gist_rainbow_r', 'gist_stern', 'gist_stern_r', 'gist_yarg', 'gist_yarg_r', 'gnuplot', 'gnuplot2', 'gnuplot2_r', 'gnuplot_r', 'gray', 'gray_r', 'hot', 'hot_r', 'hsv', 'hsv_r', 'icefire', 'icefire_r', 'inferno', 'inferno_r', 'jet', 'jet_r', 'magma', 'magma_r', 'mako', 'mako_r', 'nipy_spectral', 'nipy_spectral_r', 'ocean', 'ocean_r', 'pink', 'pink_r', 'plasma', 'plasma_r', 'prism', 'prism_r', 'rainbow', 'rainbow_r', 'rocket', 'rocket_r', 'seismic', 'seismic_r', 'spring', 'spring_r', 'summer', 'summer_r', 'tab10', 'tab10_r', 'tab20', 'tab20_r', 'tab20b', 'tab20b_r', 'tab20c', 'tab20c_r', 'terrain', 'terrain_r', 'turbo', 'turbo_r', 'twilight', 'twilight_r', 'twilight_shifted', 'twilight_shifted_r', 'viridis', 'viridis_r', 'vlag', 'vlag_r', 'winter', 'winter_r'

# examples
sns.color_palette("Blues")
sns.color_palette("ocean")
sns.color_palette("gist_rainbow")
sns.color_palette("terrain")
# a number is the 2nd param for the number of colors
sns.color_palette("terrain", 8)

# set a palette
sns.set_palette("terrain")

sns.barplot(data=tips, x="day", y="total_bill")

sns.scatterplot(data=tips, x="tip", y="total_bill", hue="sex")

# set a different palette for a single plot
sns.barplot(data=tips, x="day", y="total_bill", palette="ocean")
# this uses the palette set with set_palette
sns.barplot(data=tips, x="day", y="total_bill")

# if you have a single line, you can change its color
sns.kdeplot(data=tips, x="tip", color="magenta")
```

<br>

#### Custom palettes

He did not actually cover any of this but there was code in the notebook.

- light_palette
- dark_palette
- load_dataset

```py
sns.color_palette("pastel", 6)

codes = ["#B33771", "#3B3B98", "#FD7272", "#9AECDB", "#D6A2E8"]
custom_pal = sns.color_palette(codes)

sns.barplot(data=tips, x="day", y="total_bill", palette=custom_pal)

sns.light_palette("#eb2f06")

sns.dark_palette("#eb2f06")

diamonds = sns.load_dataset("diamonds")

sns.histplot(
    diamonds,
    x="price", hue="cut",
    multiple="stack",
    log_scale=True,
    palette=sns.dark_palette("#eb2f06", 5)
)

sns.histplot(
    diamonds,
    x="price", hue="cut",
    multiple="stack",
    log_scale=True,
    palette="dark:olive"
)

sns.blend_palette(["#4a69bd", "#e58e26"])
```

---

## Practical methods seen in GitHub projects

### Pandas

```py

```

### Matplotlib

```py

```

### Seaborn

```py

```
