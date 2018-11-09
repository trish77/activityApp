import WorkOutList from './ui/WorkOutList'

let sample = [
    {
        "location": "Prairie Life",
        "date": "10/2/2018",
        "ride": false,
        "workout": true
      },
      {
        "location": "Sunset Ridge Stables",
        "date": "10/12/2018",
        "ride": true,
        "workout": false
      },
      {
        "location": "Prairie Life",
        "date": "10/2/2018",
        "ride": false,
        "workout": true
      }
]

export default (props) =>
    <WorkOutList days={sample}
                filter={props.params.filter}
                onRemoveDay={date => console.log('remove day on', date)} />
