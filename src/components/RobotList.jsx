import React from "react";
import Robot from "./Robot";

function RobotList({ robots }) {
    return (
        <div>
            <h1>Robot List</h1>
            <div className="row">
                {robots && robots.length > 0 ? (
                    robots.map((robot) => (
                        <div className="col-md-6 col-lg-4" key={robot.id}>
                            <Robot robot={robot} />
                        </div>
                    ))
                ) : (
                    <p>Aucun robot à afficher.</p>
                )}
            </div>
        </div>
    );
}

export default RobotList;