const Instructions = ({ apiType, isOpen, onToggle, index, instructions }) => {
    return (
        <div>
            <InstructionButton isOpen={isOpen} onClick={onToggle} index={index} />
            <InstructionList apiType={apiType} isOpen={isOpen} instructions={instructions} />
        </div>
    )
}

const InstructionButton = ({ isOpen, onClick, index }) => {
    return (
        <div 
            className={`instructions-button ${isOpen ? 'open' : ''}`}
            onClick={() => onClick(index)}>
            <span className='arrow' />
            <span className='label'>Instructions</span>
        </div>
    )
}

const InstructionList = ({ apiType, isOpen, instructions }) => {
    return (
        <div className={`instructions ${isOpen ? 'open' : ''}`}>
            <p>{getInstructions(apiType, instructions)}</p>
        </div>
    )
}

const getInstructions = (apiType, instructions) => {
    if(apiType == 'cocktails') return instructions;
    return <a href={instructions}>Click here for instructions</a>
}

export default Instructions;
