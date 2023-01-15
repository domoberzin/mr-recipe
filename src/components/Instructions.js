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
            <span className='arrow text-white' />
            <span className='text-white text-2xl font-bold'>Instructions</span>
        </div>
    )
}

const InstructionList = ({ apiType, isOpen, instructions }) => {
    return (
        <div className={`instructions ${isOpen ? 'open' : ''}`}>
            <p className="text-white text-xl font-semibold">{getInstructions(apiType, instructions)}</p>
        </div>
    )
}

const getInstructions = (apiType, instructions) => {
    if(apiType == 'cocktails') return instructions;
    return <a href={instructions} className="text-xl text-white font-semibold cursor-pointer underline hover:text-green-500">Click here for instructions</a>
}

export default Instructions;
