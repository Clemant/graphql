#chmod +x nom_script.sh
#sudo chown victoire: -R folderName
docker run -it --rm -P --name graphqlTest -v /home/victoire/Documents/node/graphql/src:/app node_graphql /bin/sh
#docker run  -d --rm -P --name mongo_graph -v /home/victoire/Documents/node/graphql/data:/data/db mongo:5.0.6
