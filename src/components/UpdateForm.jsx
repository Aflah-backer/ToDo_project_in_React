const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(

        <>
        <div className="row">
          <div className="col">
            <input
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className="btn btn-lg mr-20"
              style={{backgroundColor:"#64FF00"}}
            >
              update
            </button>
            <button onClick={cancelUpdate} className="btn btn-lg" style={{backgroundColor:"black", color:"#fff"}}>
              Cancel
            </button>
          </div>
        </div>
        <br />
      </>
    )
}

export default UpdateForm;