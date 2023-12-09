"use client";

import { useStorageUpload, MediaRenderer } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Home: NextPage = () => {
    const { mutateAsync: upload } = useStorageUpload();
    const [uris, setUris] = useState<string[]>([]);
    const [textInputs, setTextInputs] = useState<string[]>([]);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            setSelectedFiles(acceptedFiles);
        },
        []
    );

    const handleImageUpload = async () => {
        if (selectedFiles.length > 0) {
            const newUris = await upload({ data: selectedFiles });
            setUris(prevUris => [...prevUris, ...newUris]);
        }
    };

    const handleTextUpload = () => {
        // Perform action on clicking text upload button
        // For example, you can append textInputs to the state or perform any other action
        console.log("Text uploaded:", textInputs);
    };

    const handleTextChange = (index: number, value: string) => {
        const newInputs = [...textInputs];
        newInputs[index] = value;
        setTextInputs(newInputs);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag files drop some files here</p>
            </div>

            <button onClick={handleImageUpload}>Upload Image</button>
            <button onClick={handleTextUpload}>Upload Text</button>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {uris.map((uri, index) => (
                    <div key={index} style={{ margin: "10px", textAlign: "center" }}>
                        <MediaRenderer src={uri} alt="Image" width="400px" />
                        <input
                            type="text"
                            value={textInputs[index] || ""}
                            placeholder="Enter text"
                            onChange={(e) => handleTextChange(index, e.target.value)}
                            style={{ marginTop: "10px" }}
                        />
                        {textInputs[index] && (
                            <p style={{ color: "white", marginTop: "5px" }}>
                                {textInputs[index]}
                            </p>
                        )}
                    </div>
                ))}~
            </div>
        </div>
    );
};

export default Home;
