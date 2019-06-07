# student_19_ripple-locality
#### Semester Project done by Etienne Caquot at the Decentralized and Distributed Systems lab.

Responsible: Prof. Bryan Ford

Supervisors: Cristina Basescu and Kelong Cong

## Setup
Make sure you have [anaconda](https://www.anaconda.com) installed to run the jupyter notebooks.

You may want to install [pip](https://pip.pypa.io/en/stable/installing/) to install the needed libraries easily.
Install the libraries from a terminal with:
- `$ pip install tqdm`
- `$ pip install python-ripple-lib`
- `$ pip install coinmarketcap`
- `$ pip install currencyconverter`

Install [Node.js](https://nodejs.org/en/download/) to run the javascripts in the connect_to_nodes folder

### Data
Data is not uploaded to Github because it is to heavy.

We have three original files situated in ripple_analysis/data/transactions/original.
- ripple-transactions-jan-2013-dec-2016.txt
- more-txs-from-missing-parsed.txt
- final_txs_2017.txt

We renamed **more-txs-from-missing-parsed.txt** to **more-txs-from-missing-parsed.json** and **final_txs_2017.txt** to **final_txs_2017.json**

**ripple-transactions-jan-2013-dec-2016.txt** is processed in **ripple-transactions-jan-2013-dec-2016.ipynb** situated in ripple_analysis/notebooks

The new files
- more-txs-from-missing-parsed.json
- final_txs_2017.json
- ripple-transactions-jan-2013-dec-2016.csv

are situated in ripple_analysis/data/transactions

### connect_to_nodes
This folder contains the code used when we tried to connect to Ripple node
- get_node_urls is a jupyter notebook used to get the nodes url
- get-server-info.js is a javascript file where we try to connect to nodes

From a terminal then go to the connect_to_nodes folder and you can run

`node get-server-info.js`

### ripple_analysis
From a terminal to the ripple_analysis folder and then run

`jupyter notebook`

a new tab will open in your browser and you will be able to run the notebooks.
