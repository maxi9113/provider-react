PROJECT_NAME=context-react
NGINX_PORT=3001

build:
	docker build -t ${PROJECT_NAME} .

shell:
	docker run -it --rm -p 3000:3000 -v $(shell pwd):/app --entrypoint=/bin/ash ${PROJECT_NAME}

run:
	docker run -it --rm -p 3000:3000 ${PROJECT_NAME}

setup-network:
	docker network inspect dpy-tests || docker network create dpy-tests

run-services:
	docker run --name fwd -it --rm -v ${HOME}/.kube/config:/root/.kube/config txn2/kubefwd services -n alliance

nginx.build:
	docker build -t ${PROJECT_NAME}_nginx -f Dockerfile.nginx .

nginx.run:
	docker run -it --rm -p ${NGINX_PORT}:80 ${PROJECT_NAME}_nginx

nginx.shell:
	docker run -it --rm -p ${NGINX_PORT}:80 --entrypoint=/bin/ash ${PROJECT_NAME}_nginx

alliance.open:
	gcloud container clusters get-credentials k8s-prod --zone us-central1-a --project custos-prj
	kubectl get pods -n alliance
	kubectl port-forward alliance-ms-nginx-85fc6c86d7-m85m8 -n alliance 8000:80	