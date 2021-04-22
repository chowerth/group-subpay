<template>
    <q-page>
        <div class="q-pa-md">
            <q-table grid flat bordered>
                <thead class="bg-blue">
                    <tr>
                        <th colspan="6">
                        <div class="row no-wrap items-center">
                            <q-img
                            style="width: 70px"
                            :ratio="1"
                            class="rounded-borders"
                            ></q-img>
            
                            <div class="text-h4 q-ml-md text-white">Group Payment Profiles</div>
                            <div class="text-h4 q-ml-md text-white"><q-btn class="bg-orange">Add Profile</q-btn></div>
                        </div>
                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="text-left">Profile Name</th>
                        <th class="text-right">Address</th>
                        <th class="text-right">Sources</th>
                    </tr>
                </thead>
                <tbody class="bg-grey-3">
                    <tr v-for="item in items" :key="item.profileName">
                        <td><q-radio></q-radio></td>
                        <td class="text-left">{{ item.profileName }}</td>
                        <td class="text-right">{{ item.address }}</td>
                        <td class="text-right">{{ item.sources }}</td>
                    </tr>
                </tbody>
            </q-table>            
        </div>
    </q-page>
</template>

<script>
export default {
    data () {       
        return {
            items: [
                {
                    profileName: 'profile1',
                    address: '1996 company ave',
                    sources: '2'
                },
                {
                    profileName: 'profile2',
                    address: '1995 company ave',
                    sources: '1'
                },
                {
                    profileName: 'profile4',
                    address: '1994 company ave',
                    sources: '4'
                }, 
                {
                    profileName: 'profile4',
                    address: '1993 company ave',
                    sources: '2'
                },
                {
                    profileName: 'profile5',
                    address: '1992 company ave',
                    sources: '6'
                }           
            ]
        }
    },
    name: "Profiles"
}
</script>