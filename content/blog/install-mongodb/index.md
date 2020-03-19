---
path: install-mongodb
date: 2020-03-16T21:37:35.954Z
title: Install MongoDB on macOS
description: Setup and run MongoDB
---

Recently, I had to do a fresh install of MongoDB Community Edition on a MacBook running macOS Catalina. This post is a guide to show the steps I followed to ensure that the installation worked seamlessly and followed the requirements for installing third-party apps on Catalina.

To give more context, Apple made some changes to the way system volumes are structured in the recent OS as seen below:
> With macOS Catalina, you can no longer store files or data in the read-only system volume, nor can you write to the "root" directory ( / ) from the command line, such as with Terminal. 

_Read more - https://support.apple.com/en-us/HT210650_

MongoDB requires creating a `data` folder in the root directory, but with the recent OS changes, this might pose some challenges.

### MongoDB Installation Steps
1. Install XCode - https://developer.apple.com/download/
2. Install Homebrew - https://brew.sh/#install
3. Tap the MongoDB Homebrew Tap
  ```shell
  brew tap mongodb/brew
  ``` 
4. Install MongoDB Community Edition
  ```shell
  brew install mongodb-community
  ```

### Run MongoDB Community Edition
**Create a data folder**

In macOS Catalina, you would need to create the `data` folder in `System/Volumes/Data` instead of `/data/db`. This is because the root folder is now read-only to help prevent the accidental overwriting of critical operating system files:
```sh
sudo mkdir -p /System/Volumes/Data/data/db
```

**Assign required permissions**
```sh
sudo chown -R `id -un` /System/Volumes/Data/data/db
```

**Run MongoDB**

To run MongoDB, you could use either of the commands below:
```sh
brew services start mongodb-community // automatically runs MongoDB on system startup
```

Or

```sh
brew services run mongodb-community // does not run automatically on system startup
```

### Check if MongoDB is running
**Using `brew services`:**
```sh
brew services list
```

Or

**Searching available processes:**
```sh
ps aux | grep -v grep | grep mongod
```

### Connect and Use MongoDB
Open a new terminal window and run the command below to connect a `mongo` shell to the instance you started above:
```sh
mongo
```

If all worked properly and you were presented with the `mongo` prompt, then MongoDB is installed and running as expected. You can grab a chilled drink now 😀🍹.

### Stop MongoDB

Use the command below to stop the MongoDB service:

```sh
brew services stop mongodb-community
```

