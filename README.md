# student_19_ripple-locality
#### Semester Project done by Etienne Caquot at the Decentralized and Distributed Systems lab.

Responsible: Prof. Bryan Ford

Supervisior: Cristina Basescu and Kelong Cong

## Setup
Make sure you have [anaconda](https://www.anaconda.com) installed to run the jupyter notebooks.

You may want to install [pip](https://pip.pypa.io/en/stable/installing/) to install the needed libraries easily.
Then to install the libraries run in a terminal :
- `$ pip install tqdm`
- `$ pip install python-ripple-lib`
- `$ pip install coinmarketcap`
- `$ pip install currencyconverter`

Install [Node.js](https://nodejs.org/en/download/) to run the javascripts in the connect_to_nodes folder

### Folders
There are two main folder in the project.
- connect_to_nodes:<br>
    -
- ripple_analysis:<br>
    contains jupyter notebook where we performs our analysis

### connect_to_nodes
This folder contains the code used when we tried to connect to Ripple node
    - get_node_urls is a jupyter notebook used to get the nodes url
    - get-server-info.js is a javascript file where we try to connect to nodes

From a terminal then go to the connect_to_nodes folder and you can run

- `node get-server-info.js`

### ripple_analysis
From a terminal to the ripple_analysis folder and then run

`jupyter notebook`

a new tab will open in your browser and you will be able to run the notebooks.
