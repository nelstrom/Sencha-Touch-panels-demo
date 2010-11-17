This Git repository includes all of the source code used in creating a tutorial about [panels in Sencha Touch][tutorial].

Each of the links below represents a snapshot of the code at a point in the video (timestamps are in brackets). You'll find instructions below on how to check out each snapshot from this git repository.

* [Blank slate][00] (0:55)

##01 Docked Items

* [Items and DockedItems][01a] (1:12)
* [Docked item: default][01b] (1:29)
* [Docked item: top][01c] (1:47)
* [2 Docked items: bottom/right][01d] (2:12)
* [2 Docked items: right/bottom][01e] (2:28)
* [2 Docked items: bottom/bottom][01f] (2:38)

##02 Nesting docked items (golden spiral)

* [Panel with dimensions][02a] (3:05)
* [Nested: right][02b] (3:15)
* [Nested: right/top][02c] (3:37)
* [6*Nested][02d] (3:50)
* [6*Nested + bevel][02e] (4:16)

##03 Generated golden spiral

* [Generated spiral][03] (4:55)

##04 Docked toolbar

* [Toolbar][04] (5:25)

## Dynamically updated dockedItems list

Link to API documentation for methods:

* [addDocked()][add]
* [insertDocked()][ins]
* [removeDocked()][rm]

<img src="https://github.com/nelstrom/Sencha-Touch-panels-demo/raw/master/assets/Panel-subclasses.png" width="900"/>

## Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/nelstrom/Sencha-Touch-panels-demo.git

Change into the directory:

    cd Sencha-Touch-panels-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate
    git checkout -b 01a_docked_items
    git checkout -b 01b_docked_items
    git checkout -b 01c_docked_items
    git checkout -b 01d_docked_items
    git checkout -b 01e_docked_items
    git checkout -b 01f_docked_items
    git checkout -b 02a_nesting_docked_items
    git checkout -b 02b_nesting_docked_items
    git checkout -b 02c_nesting_docked_items
    git checkout -b 02d_nesting_docked_items
    git checkout -b 02e_nesting_docked_items
    git checkout -b 03_generated_golden_spiral
    git checkout -b 04_docked_toolbar

You can review the list of local branches by running:

    git branches

And you can switch between branches with the checkout command. For example, to check out the `03_capture_more_interactions` branch, run:

    git co 03_capture_more_interactions


[tutorial]: http://vimeo.com/15879797
[add]: http://dev.sencha.com/deploy/touch/docs/?class=Ext.Panel&member=addDocked
[ins]: http://dev.sencha.com/deploy/touch/docs/?class=Ext.Panel&member=insertDocked
[rm]:  http://dev.sencha.com/deploy/touch/docs/?class=Ext.Panel&member=removeDocked

[00]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/00_blank_slate

[01a]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/01a_docked_items
[01b]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/01b_docked_items
[01c]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/01c_docked_items
[01d]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/01d_docked_items
[01e]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/01e_docked_items
[01f]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/01f_docked_items

[02a]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/02a_nesting_docked_items
[02b]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/02b_nesting_docked_items
[02c]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/02c_nesting_docked_items
[02d]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/02d_nesting_docked_items
[02e]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/02e_nesting_docked_items

[03]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/03_generated_golden_spiral

[04]: https://github.com/nelstrom/Sencha-Touch-panels-demo/tree/04_docked_toolbar