import React from 'react'

function Resume() {
    return (
        <div className='btnwrapper'>
            <h4>Resume</h4>
            <span>
                <a href={require('./resources/atriaccaresume20190929.pdf')} download>
                <button className='btn'>Download .pdf file</button></a>
            </span>
            <span>
                <a href={require('./resources/atriaccaresume20190929.docx')} download>
                <button className='btn'>Download .doc file</button></a>
            </span>
            {/* <span>
                <a href={require('./resources/atriaccaresume20190929.jpg')} download>
                <button className='btn'>Download .jpg file</button></a>
            </span>
            <span>
                <a href={require('./resources/atriaccaresume20190929.odt')} download>
                <button className='btn'>Download OpenDoc file</button></a>
            </span> */}
        </div>
    )
}

export default Resume