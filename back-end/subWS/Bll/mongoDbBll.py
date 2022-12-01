from pymongo import MongoClient
from bson import ObjectId 


class MongoDbBll:
    def __init__(self,collection) :
        self.__client = MongoClient(port=27017)
        self.__db = self.__client["subscriptionsDB"]
        self.__collection = self.__db[collection]

    def get_all_data(self):
        data =list(self.__collection.find())
        return data
        
    def get_one_data(self,id):
        data =self.__collection.find_one({"_id":ObjectId(id)})
        return data    
    
    def add_data(self,obj):
        self.__collection.insert_one(obj)
        return "Created"    
    
    def update_data(self,id,obj):
        self.__collection.update_one({"_id":ObjectId(id)},{"$set":obj})
        return "Updated"    
    
    def delete_data(self,id):
        self.__collection.delete_one({"_id":ObjectId(id)})
        return "Deleted"    