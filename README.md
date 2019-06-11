# student_19_ripple-locality
#### Semester Project done by Etienne Caquot at the Decentralized and Distributed Systems lab.

Responsible: Prof. Bryan Ford

Supervisors: Cristina Basescu and Kelong Cong

## Motivation
We already know that economic activity is strongly correlated with distance: the closer two companies are, the higher the ﬂow of transactions between them (all else equal). The question is, do blockchain transactions show the same pattern? We base our work on the Ripple blockchain to investigate the answer to this question.

## Setup
Make sure you have [anaconda](https://www.anaconda.com) installed to run the Jupyter Notebooks.

You may want to install [pip](https://pip.pypa.io/en/stable/installing/) to install the needed libraries easily.
Install the libraries from a terminal with:
- `$ pip install tqdm`
- `$ pip install python-ripple-lib`
- `$ pip install coinmarketcap`
- `$ pip install currencyconverter`

Install [Node.js](https://nodejs.org/en/download/) to run the javascript in the connect_to_nodes folder

## Reproduce results

### Data
Data is not uploaded to Github, it is available on request by sending a e-mail to Cristina Basescu (cristina.basescu@epfl.ch) or contacting directly DEDIS lab.

We have three original files situated in ripple_analysis/data/transactions/original
- ripple-transactions-jan-2013-dec-2016.txt
- more-txs-from-missing-parsed.txt
- final_txs_2017.txt

For transactions in ripple-transactions-jan-2013-dec-2016.txt we know (and used) the sender wallet, receiver wallet, amount, receiver currency, date.

For transactions in more-txs-from-missing-parsed.txt and final_txs_2017.txt we know (and used) sender wallet, sender amount, sender currency, receiver wallet, receiver amount, receiver currency, links (for path based transactions) and date.

We renamed **more-txs-from-missing-parsed.txt** to **more-txs-from-missing-parsed.json** and **final_txs_2017.txt** to **final_txs_2017.json**

**ripple-transactions-jan-2013-dec-2016.txt** is processed in **ripple-transactions-jan-2013-dec-2016.ipynb** situated in ripple_analysis/notebooks

The new files
- more-txs-from-missing-parsed.json
- final_txs_2017.json
- ripple-transactions-jan-2013-dec-2016.csv

are situated in ripple_analysis/data/transactions

### connect_to_nodes
This folder contains the code used when we tried to connect to Ripple node
- get_node_urls is a Jupyter Notebook used to get the nodes url
- get-server-info.js is a javascript file where we try to connect to nodes

From a terminal then go to the connect_to_nodes folder and you can run

`$ node get-server-info.js`

### ripple_analysis
From a terminal go to the ripple_analysis folder and then run

`$ jupyter notebook`

a new tab will open in your browser and you will be able to run the notebooks.

Run the **gateways.ipynb**  before **transactions.ipynb** and **credit links.ipynb**.
