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
<a href="./jupyter2.md">jupyter2.md</a>  • 
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

plt.plot()
# plot(y)
# plot(x, y)

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

### pandas scatter plots & nultiple plots on the same axes

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

---

## Grouping & Aggregating

-

```py

```

## Hierachical Indexing

-

```py

```

## Working with Text

-

```py

```

## Apply, Map, and Applymap

-

```py

```

## Combining Series and Dataframes

-

```py

```

## Seaborn notes and snippets

Sections 20-22

- load_dataset()
- replot()
- displot()
- catplot
- set_style()
- despine()

## Seaborn

```py

```

## Seaborn Categorical plots

-

```py

```

## Controlling Seaborn Aestetics

-

```py

```
