import PaperTable from 'components/UIComponents/PaperTable'
const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
const tableData = [{
  id: 1,
  name: 'Dakota Rice',
  salary: '$36.738',
  country: 'Niger',
  city: 'Oud-Turnhout'
},
{
  id: 2,
  name: 'Minerva Hooper',
  salary: '$23,789',
  country: 'Curaçao',
  city: 'Sinaai-Waas'
},
{
  id: 3,
  name: 'Sage Rodriguez',
  salary: '$56,142',
  country: 'Netherlands',
  city: 'Baileux'
},
{
  id: 4,
  name: 'Philip Chaney',
  salary: '$38,735',
  country: 'Korea, South',
  city: 'Overland Park'
},
{
  id: 5,
  name: 'Doris Greene',
  salary: '$63,542',
  country: 'Malawi',
  city: 'Feldkirchen in Kärnten'
}]

export default {
  template: require('components/Dashboard/Views/TableList.html'),
  components: {
    PaperTable
  },
  data () {
    return {
      table1: {
        title: 'Stripped Table',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: 'Table on Plain Background',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      }
    }
  }
}
