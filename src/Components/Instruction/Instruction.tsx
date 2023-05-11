interface InstructionProps{
    className ?: string 
}

const Instruction = ({className}:InstructionProps) => {
    return(
        <div className={className}>
            Press the "add card" button to add the new Card.
            Use the "sort cards" button to sort the Cards by the increase.
            Press an X icon on the top right to delete them.
        </div>
    );
}

export default Instruction