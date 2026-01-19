runlocal:
	./local.sh

dev_env: install_nvm install_node install_packages

github:
	git status
	git add .
	git commit
	git pull
	git push origin main

#############

install_nvm:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
	\. "${HOME}/.nvm/nvm.sh"

install_node:
	. $(HOME)/.nvm/nvm.sh ;\
	nvm install 24

install_packages:
	npm install