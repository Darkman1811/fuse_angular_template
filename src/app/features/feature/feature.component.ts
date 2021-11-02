import { Component } from '@angular/core';
import {RestwsService} from "../restws.service"
@Component({
    selector   : 'feature',
    templateUrl: './feature.component.html',
    styleUrls  : ['./feature.component.scss']
})
export class featureComponent
{
    /**
     * Constructor
     */
    constructor(private service:RestwsService)
    {
    }

    public callapi(){
        console.log("call api");
        this.service.callapi().subscribe(
            data => {
                            console.log(data);
            });
    }
}
