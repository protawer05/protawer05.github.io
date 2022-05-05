import progress from '../../../resources/progress.png'
const InProcessPage = () => {
    return (
        <div style={{'textAlign': 'center'}}>
            <img src={progress} alt="progress" style={{'margin': '0 auto'}}/>
            <h1 style={{'fontSize': '50px'}}>В процессе хуле</h1>
        </div>
        
    )
}

export default InProcessPage;