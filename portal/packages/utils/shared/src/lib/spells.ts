export const getDocumentTypes = (nodes: any) => {
  return Object.keys(nodes).reduce((acc: string[], key) => {
    const node = nodes[key];
    if (node.name === "Get Documents") {
      const type = node.data.type || "none";
      acc.push(type);
    }
    return acc;
  }, []) as string[];
};

export const usesDocuments = (nodes: any) => {
  let usesDocuments = false;

  Object.keys(nodes).forEach((key) => {
    const node = nodes[key];
    // Do something with the node
    if (node.name === "Get Documents") {
      usesDocuments = true;
    }
  });

  return usesDocuments;
};

export const getEmbeddingModels = (nodes: any) => {
  return Object.keys(nodes).reduce((acc: string[], key) => {
    const node = nodes[key];
    if (node.name === "Create Text Embedding") {
      const type = node.data.model || "embedding-gecko-001";
      acc.push(type);
    }
    return acc;
  }, []) as string[];
};

// googleai_api_key;
