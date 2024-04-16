$(document).ready(function () {
    const wrapper = $('#wrapper');
    const imagePaths = ["images/falcon_heavy.jpg", "images/Saturn_V.jpg", "images/Ariane_5.jpg", "images/Long-March.jpg", "images/electron.jpg", "images/vega.jpg", "images/falcon01.jpg", "images/pegasus.jpg", "images/voyager.jpg", "images/dart.jpg", "images/new-horizonz.jpg", "images/juno.jpg", "images/Hubble Space Telescope.jpg", "images/JWST.jpg", "images/Kepler.jpg", "images/GPS Block A.jpg", "images/Curiosity.jpg", "images/Perseverance.jpg", "images/Zhurong.jpg", "images/Opportunity.jpg", "images/inSight.jpg", "images/ChangeRocket.jpg", "images/Venera 10.jpg", "images/Hayabusa2.jpg", "images/ISS.jpg", "images/Tiangong.jpg", "images/Mir.jpg", "images/Skylab.jpg", "images/Crew Dragon.jpg", "images/Apollo Command Module.jpg", "images/spaceshuttle.jpg", "images/Soyuz Rocket.jpg"];
    rocketData.forEach((rocket, index) => {
        const card =
            $(`<div class="card">
            <div class="card-content">
            <div class="card-header">
                    <h3>${rocket.name}</h3>
                    <p class="rocket-classification">${rocket.group_letter}${rocket.number}</p>
                </div>
                <div class="card-image-wrapper">
                    <img src="./${imagePaths[index]}" alt="" class="card-image">
                </div>
                <div class="card-content-inner">
                <div class="item-wrapper-large">
                    <div>
                        <p class="item-headline">Mission Goal</p>
                    </div>
                    <div>${rocket.mission_goal}</div>
                </div>
                    <div class="item-wrapper">
                        <div><img src="../icons/weight.svg" alt="weight-icon" /></div>
                        <div>${rocket.weight} kg</div>
                    </div>
                    <div class="item-wrapper">
                        <div><img src="../icons/koffer.svg" alt="koffer-icon" /></div>
                        <div>${rocket.payload} </div>
                    </div>
                    <div class="item-wrapper">
                        <div><img src="../icons/time.svg" alt="time-icon" /></div>
                        <div>${rocket.mission_duration}</div>
                    </div>
                    <div class="item-wrapper">
                        <div><img src="../icons/speed.svg" alt="speed-icon" /></div>
                        <div>${rocket.max_speed} km/h</div>
                    </div>
                    <div class="item-wrapper">
                        <div><img src="../icons/earth.svg" alt="earth-icon" /></div>
                        <div>${rocket.max_earth_distance} km</div>
                    </div>
                    <div class="item-wrapper">
                        <div><img src="../icons/calendar.svg" alt="calendar-icon" /></div>
                        <div>${rocket.year_built}</div>
                    </div>
                  
                    
                </div>
                </div>
            </div>
        </div>`);
        wrapper.append(card);
    });
});