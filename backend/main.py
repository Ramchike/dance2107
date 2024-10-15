import uvicorn


if __name__ == "__main__":
    uvicorn.run("src:app", port=666, reload=True)