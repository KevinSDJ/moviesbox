import {Subject} from 'rxjs'





export class SubjectManager{
    subjects$ = new Subject();

    getSubject(){
        return this.subjects$.asObservable()
    }

    setSubject(value){
        this.subjects$.next(value)
    }
}

