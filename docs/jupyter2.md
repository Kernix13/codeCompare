# Jupyter Code Snippets for Matplotlib and Seaborn

<li><a href="./../index.html">Compare</a></li>
<li><a href="./../details.html">In Depth</a></li>
<li><a href="./../frameworks.html">Frameworks</a></li>

> I forgot the frontmatter - do I need it?

## Matplotlib notes and snippets

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

-

```py

```

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
