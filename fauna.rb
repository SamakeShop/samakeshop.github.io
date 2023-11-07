require 'fauna'

client = Fauna::Client.new(secret: 'fnacapi_omd2ZXJzaW9uAWdwYXlsb2FkWFiiYmlkcjM3OTc1NjA0MDIyMDA0OTk4NmZzZWNyZXR4OGhrU3VSRm8wNzhhQWNXUnNiVzJEblFZYXJpMnZRbU1LdHFwd2UxenBlYVduV2F0dHhmVUtadz09')


 response = client.query(Fauna::Query::CreateCollection.new(name: 'likes_dislikes_db'))
 puts "Collection created successfully. Ref: #{response['ref']['id']}"
