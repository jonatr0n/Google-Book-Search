var React = require("react");
var queryNYT = require("../../helper")

class Search extends React.Component{
  constructor() {
      super();
      //binding search function
      this.search = this.search.bind(this);
  }

  search(event) {
    event.preventDefault();
    console.log("search button clicked")
    var data = {};

    for(var input in this.refs) {
        data[input] = this.refs[input].value;
        this.refs[input].value = '';
    }
    //Connect to the API- run query
    queryNYT.runQuery(data.topic, data.start, data.stop).then(function (data) {
        this.props.setParent(data);
    }.bind(this));
  }

  save(data){
    event.preventDefault();
    queryNYT.postSaved(data);
  }

  render(){
      return(
        <div className="container">
          <div className="col-lg-12">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Search</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                          <label htmlFor="topic">Topic</label>
                          <textarea className="form-control" id="topic" rows="1" ref="topic"></textarea>
                          <label htmlFor="startyear">Start Year</label>
                          <input className="form-control" id="topic" rows="1" type="number" ref="start"></input>
                          <label htmlFor="endyear">End Year</label>
                          <input className="form-control" id="topic" rows="1" type="number" ref="stop"></input>
                          <button type="submit" className="btn btn-primary" onClick={this.search}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>   
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Results</h3>
                </div>
                <div className="panel-body">
                    {this.props.results.map(({_id, lead_paragraph, web_url, headline, pub_date}) => (
                      <div className="row" key= {_id}>
                          <div className="well">
                            <a href={web_url} target="_blank"><h3>{headline.main}</h3></a>
                            <h5>Date published:{pub_date}</h5>
                            <p>{lead_paragraph}</p>
                          <button type="submit" className="btn btn-primary" onClick={ 
                            () => {
                              var data = {
                              title: headline.main,
                              date: pub_date,
                              url: web_url
                              }
                              this.save(data)
                            }
                          }>Save</button>
                        </div>                              
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
    )
  }
};

module.exports = Search;
