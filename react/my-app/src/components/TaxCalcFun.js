function CalcTax(props) {
  return (
    <div>
      <center>
        <form>
          <h2>Tax Calculate Using functional components</h2>
          <label>Employe number : </label>
          <input type="text" value={props.eid}></input>
          <br />
          <label>Employe name : </label>
          <input type="text" value={props.ename}></input>
          <br />
          <label>Employe salary : </label>
          <input type="text" value={props.sal}></input>
          <p>Compute HRA TA DA (30%,23%,75% of sal)</p>
          <label>HRA : </label>
          <input
            type="number"
            value={parseFloat(props.sal) + 0.3 * parseFloat(props.sal)}
          ></input>
          <br />
          <label>TA : </label>
          <input
            type="number"
            value={parseFloat(props.sal) + 0.23 * parseFloat(props.sal)}
          ></input>
          <br />
          <label>DA : </label>
          <input
            type="number"
            value={parseFloat(props.sal) + 0.75 * parseFloat(props.sal)}
          ></input>
          <br />
          <label>Gross Salary : </label>
          <input
            type="number"
            value={
              parseFloat(props.sal) +
              0.75 * parseFloat(props.sal) +
              0.23 * parseFloat(props.sal) +
              0.3 * parseFloat(props.sal)
            }
          ></input>
        </form>
      </center>
    </div>
  );
}
export default CalcTax;
