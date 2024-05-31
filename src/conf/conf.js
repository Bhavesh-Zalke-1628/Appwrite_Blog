const conf = {
    appWriteURl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}


export default conf;