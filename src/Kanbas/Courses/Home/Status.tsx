function Status() {
    return (
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '250px' }}>
        <br />
        <br />
        <h4>Course Status</h4>
        <table>
          <tbody>
            <tr>
              <td>
                <button className="btn btn-light">Unpublish</button>
              </td>
              <td>
                <button className="btn btn-light">Publish</button>
              </td>
            </tr>
          </tbody>
        </table>
        <ul className="list-unstyled">
          <li><a href="/Kanbas/Courses/Home/screen.html" className="btn btn-light btn-block" style={{ width: '220px' }}>Import Existing Content</a></li>
          <li><a href="/Kanbas/Courses/Home/screen.html" className="btn btn-light btn-block" style={{ width: '220px' }}>Import From Commons</a></li>
          <li><a href="/Kanbas/Courses/Home/screen.html" className="btn btn-light btn-block" style={{ width: '220px' }}>Choose Home Page</a></li>
          <li><a href="/Kanbas/Courses/Home/screen.html" className="btn btn-light btn-block" style={{ width: '220px' }}>View Course Stream</a></li>
          <li><a href="/Kanbas/Courses/Home/screen.html" className="btn btn-light btn-block" style={{ width: '220px' }}>New Announcement</a></li>
          <li><a href="/Kanbas/Courses/Home/screen.html" className="btn btn-light btn-block" style={{ width: '220px' }}>New Analytics</a></li>
          <li><a href="/Kanbas/Courses/Home/screen.html" className="btn btn-light btn-block" style={{ width: '220px' }}>View Course Notifications</a></li>
        </ul>
        <hr />
        <div className="row">
          <h4 className="col">To Do</h4>
          <a href="/Kanbas/Courses/Home/screen.html" className="col text-danger">View Calendar</a>
        </div>
        <hr />
        <ul className="list-unstyled">
          <li><a className="text-danger" href="/Kanbas/Courses/Home/screen.html">Lecture CS5610 | 1/8</a></li>
          <li><a className="text-danger" href="/Kanbas/Courses/Home/screen.html">Lecture CS5610 | 1/15</a></li>
          <li><a className="text-danger" href="/Kanbas/Courses/Home/screen.html">Lecture CS5610 | 1/22</a></li>
        </ul>
      </div>
    );
  }
  
export default Status;