import { useState, useRef } from 'react'
import './FileUpload.css'

function FileUpload({ onFileUpload, loading, disabled }) {
    const [dragActive, setDragActive] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const fileInputRef = useRef(null)

    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true)
        } else if (e.type === 'dragleave') {
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0])
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0])
        }
    }

    const handleFile = (file) => {
        if (file.type === 'application/pdf') {
            setSelectedFile(file)
        } else {
            alert('Please upload a PDF file')
        }
    }

    const handleSubmit = () => {
        if (selectedFile && !disabled) {
            onFileUpload(selectedFile)
        }
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="file-upload-container fade-in">
            <div
                className={`upload-zone ${dragActive ? 'drag-active' : ''} ${disabled ? 'disabled' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleButtonClick}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf"
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    disabled={disabled}
                />

                <div className="upload-icon">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <polyline points="17 8 12 3 7 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="12" y1="3" x2="12" y2="15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h3 className="upload-title">
                    {selectedFile ? selectedFile.name : 'Drop your PDF here'}
                </h3>
                <p className="upload-subtitle">
                    {selectedFile ? 'Click to change file' : 'or click to browse'}
                </p>
                <p className="upload-hint">Supports PDF files up to 10MB</p>
            </div>

            {selectedFile && (
                <button
                    className="analyze-button"
                    onClick={handleSubmit}
                    disabled={disabled}
                >
                    {loading ? (
                        <>
                            <span className="button-spinner"></span>
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Analyze with AI
                        </>
                    )}
                </button>
            )}
        </div>
    )
}

export default FileUpload
