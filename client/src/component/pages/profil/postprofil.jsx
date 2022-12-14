import React from 'react';

const Postprofil = () => {
    return (
      <div className="profile-content">
            
               <div className="tab-content p-0">
          
                  <div className="tab-pane fade active show" id="profile-post">
               
                     <ul className="timeline">
                        <li>
                     
                           <div className="timeline-time">
                              <span className="date">today</span>
                              <span className="time">04:20</span>
                           </div>
                      
                           <div className="timeline-icon">
                              <a href="javascript:;">&nbsp;</a>
                           </div>
                 
                           <div className="timeline-body">
                              <div className="timeline-header">
                                    <span className="userimage">
                                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></span>
                                 <span className="username"><a href="javascript:;">Sean Ngu</a> <small></small></span>
                                 <span className="pull-right text-muted">18 Views</span>
                              </div>
                              <div className="timeline-content">
                                 <p style={{textAlign:'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
                                    Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
                                 </p>
                              </div>
                              <div className="timeline-likes">
                                 <div className="stats-right">
                                    <span className="stats-text">259 Shares</span>
                                    <span className="stats-text">21 Comments</span>
                                 </div>
                                 <div className="stats">
                                    <span className="fa-stack fa-fw stats-icon">
                                    <i className="fa fa-circle fa-stack-2x text-danger"></i>
                                    <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                    </span>
                                    <span className="fa-stack fa-fw stats-icon">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <span className="stats-total">4.3k</span>
                                 </div>
                              </div>
                              <div style={{display:'flex'}} className="timeline-footer">
                            <a  href="javascript:;" className="m-r-10 text-inverse-lighter" style={{ marginRight: '15px',display:'flex' }} ><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                            
                                 <a href="javascript:;" className="m-r-10 text-inverse-lighter" style={{marginRight:'15px',display:'flex'}}><i className="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                 {/* <a href="javascript:;" className="m-r-10 text-inverse-lighter" style={{marginRight:'15px'}}><i className="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a> */}
                              </div>
                              <div className="timeline-comment-box">
                                    <div className="user">
                                      <img src="https://bootdey.com/img/Content/avatar/avatar3.png" /></div>
                                 <div className="input">
                                    <form action="">
                                       <div className="input-group">
                                          <input type="text" className="form-control rounded-corner" placeholder="Write a comment..." />
                                          <span className="input-group-btn p-l-10">
                                          <button className="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                          </span>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </div>
                         
                                
                        </li>
                        <li>
                      
                         
                         
                         
                         
                      
                                
                        </li>
                       
                              
                        
                        <li>
                         
                         
                       
                           <div className="timeline-body">
                              Loading...
                           </div>
                      
                        </li>
                     </ul>
                 
                  </div>
        
               </div>
          
            </div>
    );
};

export default Postprofil;