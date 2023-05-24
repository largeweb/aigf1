## This document outlines the architecture and design of a sexy girl chatbot app that provides an exciting girlfriend experience. The app is built using React, Vite, Express, Pinecone API, and Wizard-Vicuna-13B-Uncensored, and is designed to provide a smooth and intuitive user experience. The backend Express server handles text processing and API requests, while the vector database, Pinecone API, is used for querying and embeddings. A GPU instance is used to handle text inferencing, ensuring scalability and security.

### frontend - this is the main chatbot interface for the app. this will send requests to the API for the data to be processed.
```
 cd frontend
 yarn # install packages
 yarn dev # start server
```

### server.js - this is the main backend endpoint that handles all incoming requests and makes API calls and handles text.
```
 cd backend
 npm i # install packages
 node server.js # start the server
```

### inference - all the files / commands used to train and infer on the chatbot GPU instance. currently testing with 24GB RTX 4090 instance (I suspect it can be done with a cheaper instance).
