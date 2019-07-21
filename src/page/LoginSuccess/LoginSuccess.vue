<template>
  <div class="LoginSuccess">
    <h1> {{ $store.getters.getId }} 로그인</h1>
    <div class="tables-basic">
      <b-breadcrumb>
        <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
        <b-breadcrumb-item active>Tables Basic</b-breadcrumb-item>
      </b-breadcrumb>
      <b-row>
        <b-col lg="12">
          <br/><br/>
          <h3>Hover <span class="fw-semi-bold">Table</span></h3>
          <p>Trace only what's really important. <code>.table-hover</code> is made for it.</p>
          <div class="table-responsive">
            <table class="table table-hover table-striped">
              <thead>
              <tr>
                <th>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                           id="checkbox1" :checked="checkboxes1[0]"
                           @change="event => checkAll(event, 'checkboxes1')"
                    />
                    <label for="checkbox1"/>
                  </div>
                </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                           id="checkbox2" :checked="checkboxes1[1]"
                           @change="event => changeCheck(event, 'checkboxes1', 1)"
                    />
                    <label for="checkbox2"/>
                  </div>
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td><a href="#">ottoto@example.com</a></td>
                <td>
                  <b-badge variant="gray" class="text-gray" pill>Pending</b-badge>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                           id="checkbox3" :checked="checkboxes1[2]"
                           @change="event => changeCheck(event, 'checkboxes1', 1)"
                    />
                    <label for="checkbox3"/>
                  </div>
                </td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><a href="#">fat.thor@example.com</a></td>
                <td>
                  <b-badge variant="gray" class="text-gray-light" pill>Unconfirmed</b-badge>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                           id="checkbox4" :checked="checkboxes1[3]"
                           @change="event => changeCheck(event, 'checkboxes1', 1)"
                    />
                    <label for="checkbox4"/>
                  </div>
                </td>
                <td>Larry</td>
                <td>the Bird</td>
                <td><a href="#">larry@example.com</a></td>
                <td>
                  <b-badge variant="gray" class="text-gray" pill>New</b-badge>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input type="checkbox"
                           id="checkbox5" :checked="checkboxes1[4]"
                           @change="event => changeCheck(event, 'checkboxes1', 1)"
                    />
                    <label for="checkbox5"/>
                  </div>
                </td>
                <td>Peter</td>
                <td>Horadnia</td>
                <td><a href="#">peter@example.com</a></td>
                <td>
                  <b-badge variant="gray" class="text-gray-light" pill>Active</b-badge>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'
import Widget from '@/components/Widget/Widget'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'LoginSuccess',
  components: {Widget},
  data () {
    return {
      uid: this.$route.params.uid,
      password: this.$route.params.password,
      tableStyles: [
        {
          id: 1,
          picture: require('../../assets/tables/1.jpg'), // eslint-disable-line global-require
          description: 'Palo Alto',
          info: {
            type: 'JPEG',
            dimensions: '200x150'
          },
          date: new Date('September 14, 2012'),
          size: '45.6 KB',
          progress: {
            percent: 29,
            colorClass: 'success'
          }
        },
        {
          id: 2,
          picture: require('../../assets/tables/2.jpg'), // eslint-disable-line global-require
          description: 'The Sky',
          info: {
            type: 'PSD',
            dimensions: '2400x1455'
          },
          date: new Date('November 14, 2012'),
          size: '15.3 MB',
          progress: {
            percent: 33,
            colorClass: 'warning'
          }
        },
        {
          id: 3,
          picture: require('../../assets/tables/3.jpg'), // eslint-disable-line global-require
          description: 'Down the road',
          label: {
            colorClass: 'danger',
            text: 'INFO!'
          },
          info: {
            type: 'JPEG',
            dimensions: '200x150'
          },
          date: new Date('September 14, 2012'),
          size: '49.0 KB',
          progress: {
            percent: 38,
            colorClass: 'inverse'
          }
        },
        {
          id: 4,
          picture: require('../../assets/tables/4.jpg'), // eslint-disable-line global-require
          description: 'The Edge',
          info: {
            type: 'PNG',
            dimensions: '210x160'
          },
          date: new Date('September 15, 2012'),
          size: '69.1 KB',
          progress: {
            percent: 17,
            colorClass: 'danger'
          }
        },
        {
          id: 5,
          picture: require('../../assets/tables/5.jpg'), // eslint-disable-line global-require
          description: 'Fortress',
          info: {
            type: 'JPEG',
            dimensions: '1452x1320'
          },
          date: new Date('October 1, 2012'),
          size: '2.3 MB',
          progress: {
            percent: 41,
            colorClass: 'primary'
          }
        }
      ],
      checkboxes1: [false, false, false, false, false]
    }
  },
  methods: {
    parseDate (date) {
      const dateSet = date.toDateString().split(' ')
      return `${date.toLocaleString('en-us', {month: 'long'})} ${dateSet[2]}, ${dateSet[3]}`
    },
    checkAll (ev, checkbox) {
      const checkboxArr = (new Array(this[checkbox].length)).fill(ev.target.checked)
      Vue.set(this, checkbox, checkboxArr)
    },
    changeCheck (ev, checkbox, id) {
      this[checkbox][id] = ev.target.checked
      if (!ev.target.checked) {
        this[checkbox][0] = false
      }
    },
    getRandomData () {
      const result = []
      for (let i = 0; i <= 8; i += 1) {
        result.push(Math.floor(Math.random() * 20) + 1)
      }
      return result
    },
    initCharts () {
      const colors = ['#547fff', '#9964e3', '#f55d5d', '#ffc247', '#3abf94']
      $.each($('.sparkline-chart'), (id, chart) => {
        $(chart).sparkline(this.getRandomData(), {
          type: 'bar',
          barColor: colors[Math.floor(Math.random() * colors.length)]
        })
      })
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>

<style src="./LoginSuccess.scss" lang="scss" scoped></style>
