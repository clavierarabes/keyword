#!/bin/bash

# Télécharger et installer NoMachine
wget https://download.nomachine.com/download/7.10/Linux/nomachine_7.10.1_1_amd64.deb -O nomachine.deb
sudo dpkg -i nomachine.deb
sudo apt --fix-broken install

# Installer XFCE et XRDP
sudo apt-get update
sudo apt-get install -y xfce4 xfce4-goodies xrdp

# Configurer XRDP pour utiliser XFCE
echo xfce4-session > ~/.xsession

# Redémarrer le service XRDP
sudo systemctl enable xrdp
sudo service xrdp restart

# Créer un utilisateur pour RDP
sudo useradd -m colabuser
echo 'colabuser:password' | sudo chpasswd
sudo adduser colabuser sudo
