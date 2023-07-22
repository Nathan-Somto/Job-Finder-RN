import { ScrollView } from 'react-native'
import React from 'react'
import { TabView } from '@rneui/themed'
import DetailsAbout from '@components/DetailsAbout'
import DetailsMap from '@components/DetailsMap'
import DetailsSpecifics from '@components/DetailsSpecifics'

export default function DetailsTabContent ({ active, setActive, content }) {
  return (
    <TabView
      value={active}
      onChange={setActive}
      minSwipeSpeed={0.8}
      animationType="timing"
    >
      <TabView.Item>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
        <DetailsAbout
          aboutContent={content?.job_description ?? 'No Job Description'}
        />
        <DetailsMap lat={content?.job_latitude} lng={content?.job_longitude} />
        </ScrollView>
      </TabView.Item>
      <TabView.Item>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
        <DetailsSpecifics
          specificTitle={'Qualifications'}
          specificContent={content?.job_highlights?.Qualifications ?? 'N/A'}
        />
      </ScrollView>
      </TabView.Item>
      <TabView.Item>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 80 }}>
        <DetailsSpecifics
          specificTitle={'Respondsibilities'}
          specificContent={content?.job_highlights?.Responsibilities ?? 'N/A'}
        />
        </ScrollView>
      </TabView.Item>
    </TabView>
  )
}
