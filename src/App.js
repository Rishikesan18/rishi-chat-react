import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div className="container">
    <div className="row">
      <div className="col-3 vh-100">
      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary">
    
    <div class="list-group list-group-flush border-bottom scrollarea">
      <a href="#" class="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
        <div class="d-flex w-100 align-items-center justify-content-between">
          <strong class="mb-1">Rishi</strong>
          <small>Wed</small>
        </div>
        <div class="col-10 mb-1 small">Last Message</div>
      </a>
      
      

    </div>
  </div>
      </div>

      <div className="col-9 border">

        <div id="head" className="py-3 lh-sm border-bottom">
          <strong class="mb-1">Members: Rishi, Preetham Sir</strong>
        </div>

        <div id="conversation">
          <div class="row pt-2">
            <div class="col-6">
              <div class="alert d-inline-block alert-primary" role="alert">
                Hi
              </div>
            </div>
            <div class="col-6">

            </div>
          </div>

          <div class="row pt-2">
            <div class="col-6">
              
            </div>
            <div class="col-6">
            <div class="alert d-inline-block alert-success float-end" role="alert">
                Hello there
              </div>

            </div>
          </div>


        </div>

        <form id="reply" class="p-3 w-100">
          <div class="input-group">
            <input class="form-control" placeholder="Write a message"/>
          </div>
        </form>
        
      </div>
    </div>
  </div>
}

export default App;
