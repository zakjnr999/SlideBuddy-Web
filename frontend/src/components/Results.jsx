import { useState } from 'react'
import './Results.css'

function Results({ results, onReset }) {
    const [copiedSection, setCopiedSection] = useState(null)

    const copyToClipboard = (text, section) => {
        navigator.clipboard.writeText(text)
        setCopiedSection(section)
        setTimeout(() => setCopiedSection(null), 2000)
    }

    return (
        <div className="results-container fade-in">
            <div className="results-header">
                <h2 className="results-title">Analysis Complete! 🎉</h2>
                <button className="reset-button" onClick={onReset}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <polyline points="1 4 1 10 7 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Upload New PDF
                </button>
            </div>

            {/* Summary Section */}
            <div className="result-card slide-in">
                <div className="card-header">
                    <div className="card-icon summary-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
                            <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                            <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" />
                            <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" />
                            <polyline points="10 9 9 9 8 9" strokeWidth="2" />
                        </svg>
                    </div>
                    <h3 className="card-title">Summary</h3>
                    <button
                        className="copy-button"
                        onClick={() => copyToClipboard(results.summary, 'summary')}
                    >
                        {copiedSection === 'summary' ? (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="20 6 9 17 4 12" strokeWidth="2" />
                                </svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" />
                                </svg>
                                Copy
                            </>
                        )}
                    </button>
                </div>
                <div className="card-content">
                    <p className="summary-text">{results.summary}</p>
                </div>
            </div>

            {/* Questions Section */}
            <div className="result-card slide-in" style={{ animationDelay: '0.1s' }}>
                <div className="card-header">
                    <div className="card-icon questions-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth="2" />
                            <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" />
                        </svg>
                    </div>
                    <h3 className="card-title">Practice Questions & Answers</h3>
                    <button
                        className="copy-button"
                        onClick={() => copyToClipboard(
                            results.questions.map((q, i) => `Q${i + 1}: ${q.question}\nA: ${q.answer}`).join('\n\n'),
                            'questions'
                        )}
                    >
                        {copiedSection === 'questions' ? (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <polyline points="20 6 9 17 4 12" strokeWidth="2" />
                                </svg>
                                Copied!
                            </>
                        ) : (
                            <>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" />
                                </svg>
                                Copy All
                            </>
                        )}
                    </button>
                </div>
                <div className="card-content">
                    <div className="questions-list">
                        {results.questions.map((qa, index) => (
                            <div key={index} className="question-item">
                                <div className="question-number">Q{index + 1}</div>
                                <div className="question-content">
                                    <p className="question-text">{qa.question}</p>
                                    <div className="answer-box">
                                        <span className="answer-label">Answer:</span>
                                        <p className="answer-text">{qa.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results
