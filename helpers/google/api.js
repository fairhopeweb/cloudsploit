/*
 enabled: send integration is enable or not
 isSingleSource: whether resource is single source or not

----------Bridge Side Data----------
 BridgeServiceName: it should be the api service name which we are storing in json file in s3 collection bucket.
 BridgeCall: it should be the api call which we are storing in json file in s3 collection bucket.
 BridgePluginCategoryName: it should be equivalent to Plugin Category Name.
 BridgeProvider: it should be the cloud provider
                 Eg. 'aws', 'Azure', 'Google'

 BridgeArnIdentifier: no need to pass.

 BridgeIdTemplate: no need to pass.

 BridgeIdTemplate: this should be the template for creating the resource id.
                    Eg. 'projects/aqua-dev-project/regions/{region}/clusters/{name}'


 BridgeResourceType: this should be type of the resource, fetch it from the id.
                     Eg. 'servers'

 BridgeResourceNameIdentifier: it should be the key of resource name/id data which we are storing in json file in  s3 collection bucket.
                               Eg. 'Name/name' or 'Id/id'.

 Note: if there is no name then we have to pass the id.

 BridgeExecutionService: it should be equivalent to service name which we are sending from executor in payload data.
 BridgeCollectionService: it should be equivalent to service name which we are sending from collector in payload data.
 DataIdentifier: it should be the parent key field of data which we want to collect in json file in s3 collection bucket.

----------Processor Side Data----------
These fields should be according to the user and product manager, what they want to show in Inventory UI.
 InvAsset: 'Pub/Sub'
 InvService: 'Pub/Sub'
 InvResourceCategory: 'cloud_resources'
 InvResourceType: 'Pub/Sub'

Note: For specific category add the category name otherwise it should be 'cloud_resource'

 Take the reference from the below map
*/

// Note: In Below service map add only single source resources.
// and service name should be plugin category.

var serviceMap = {
    'Pub/Sub':
        {
            enabled: true, isSingleSource: true, InvAsset: 'Pub/Sub', InvService: 'Pub/Sub',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'Pub/Sub', BridgeServiceName: 'topics',
            BridgePluginCategoryName: 'gcp-Pub/Sub', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: '', BridgeResourceType: 'topics',
            BridgeResourceNameIdentifier: 'name', BridgeExecutionService: 'gcp-Pub/Sub',
            BridgeCollectionService: 'gcp-topics', DataIdentifier: 'data',
        },
    'DNS':
        {
            enabled: true, isSingleSource: true, InvAsset: 'Managed Zone', InvService: 'DNS',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'DNS', BridgeServiceName: 'managedzones',
            BridgePluginCategoryName: 'gcp-DNS', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: 'projects/aqua-dev-project/zones/{name}', BridgeResourceType: 'zones',
            BridgeResourceNameIdentifier: 'name', BridgeExecutionService: 'gcp-DNS',
            BridgeCollectionService: 'gcp-managedZones', DataIdentifier: 'data',
        },
    'VPC Network':
        {
            enabled: true, isSingleSource: true, InvAsset: 'VPC Network', InvService: 'VPC Network',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'VPC Network', BridgeServiceName: 'networks',
            BridgePluginCategoryName: 'gcp-VPC Network', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: '', BridgeResourceType: 'networks',
            BridgeResourceNameIdentifier: 'name', BridgeExecutionService: 'gcp-VPC Network',
            BridgeCollectionService: 'gcp-networks', DataIdentifier: 'data',
        },
    'Cryptographic Keys':
        {
            enabled: true, isSingleSource: true, InvAsset: 'Cryptographic Key', InvService: 'Cryptographic Keys',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'Cryptographic Key', BridgeServiceName: 'cryptokeys',
            BridgePluginCategoryName: 'gcp-Cryptographic Keys', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: '', BridgeResourceType: 'cryptoKeys',
            BridgeResourceNameIdentifier: 'name', BridgeExecutionService: 'gcp-Cryptographic Keys',
            BridgeCollectionService: 'gcp-cryptoKeys', DataIdentifier: 'data',
        },
    'CLB':
        {
            enabled: true, isSingleSource: true, InvAsset: 'Url Map', InvService: 'CLB',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'CLB', BridgeServiceName: 'urlmaps',
            BridgePluginCategoryName: 'gcp-CLB', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: '', BridgeResourceType: 'urlMaps',
            BridgeResourceNameIdentifier: 'name', BridgeExecutionService: 'gcp-CLB',
            BridgeCollectionService: 'gcp-urlMaps', DataIdentifier: 'data',
        },
    'Deployment Manager':
        {
            enabled: true, isSingleSource: true, InvAsset: 'Deployment', InvService: 'Deployment Manager',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'Deployment Manager', BridgeServiceName: 'deployments',
            BridgePluginCategoryName: 'gcp-Deployment Manager', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: '', BridgeResourceType: 'deployments',
            BridgeResourceNameIdentifier: 'name', BridgeExecutionService: 'gcp-Deployment Manager',
            BridgeCollectionService: 'gcp-deployments', DataIdentifier: 'data',
        },
    'Logging':
        {
            enabled: true, isSingleSource: true, InvAsset: 'Metrics', InvService: 'Logging',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'Logging', BridgeServiceName: 'metrics',
            BridgePluginCategoryName: 'gcp-Logging', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: 'projects/aqua-dev-project/metrics/{name}', BridgeResourceType: 'logging metrics',
            BridgeResourceNameIdentifier: 'name', BridgeExecutionService: 'gcp-Logging',
            BridgeCollectionService: 'gcp-metrics', DataIdentifier: 'data',
        },
    'Dataproc':
        {
            enabled: true, isSingleSource: true, InvAsset: 'Cluster', InvService: 'Dataproc',
            InvResourceCategory: 'cloud_resources', InvResourceType: 'Dataproc', BridgeServiceName: 'dataproc',
            BridgePluginCategoryName: 'gcp-Dataproc', BridgeProvider: 'Google', BridgeCall: 'list',
            BridgeArnIdentifier: '', BridgeIdTemplate: 'projects/aqua-dev-project/regions/{region}/clusters/{name}',
            BridgeResourceType: 'clusters', BridgeResourceNameIdentifier: 'clusterName', BridgeExecutionService: 'gcp-Dataproc',
            BridgeCollectionService: 'gcp-dataproc', DataIdentifier: 'data',
        }
};
var calls = {
    disks: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/zones/{locationId}/disks',
            location: 'zone',
            pagination: true
        },
        aggregatedList: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/aggregated/disks',
            location: null,
            pagination: true
        }
    },
    repositories: {
        list: {
            url: 'https://artifactregistry.googleapis.com/v1/projects/{projectId}/locations/{locationId}/repositories',
            location: 'region',
            pagination: true
        },
        sendIntegration: {
            enabled: true
        }
    },
    images: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/images',
            location: null,
            pagination: true,
            ignoreMiscData: true
        }
    },
    snapshots: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/snapshots',
            location: null,
            pagination: true
        }
    },
    securityPolicies: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/securityPolicies',
            location: null,
            pagination: true
        }
    },
    resourcePolicies: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/regions/{locationId}/resourcePolicies',
            location: 'region',
            pagination: true
        }
    },
    firewalls: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/firewalls',
            location: null,
            pagination: true
        }
    },
    compute: { 
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/zones/{locationId}/instances',
            location: 'zone',
            ignoreMiscData: true,
            pagination: true
        },
        aggregatedList: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/aggregated/instances',
            location: null,
            pagination: true
        },
        sendIntegration: {
            enabled: true,
            integrationReliesOn: {
                serviceName: ['resourceRecordSets', 'firewalls']
            }
        },
    },
    sql: {
        list: {
            url: 'https://sqladmin.googleapis.com/sql/v1beta4/projects/{projectId}/instances',
            location: null,
            pagination: true
        },
        sendIntegration: {
            enabled: true
        }
    },
    spanner: {
        list: {
            url: 'https://spanner.googleapis.com/v1/projects/{projectId}/instances',
            location: null,
            pagination: true,
            paginationKey: 'pageSize'
        }
    },
    bigtable: {
        list: {
            url: 'https://bigtableadmin.googleapis.com/v2/projects/{projectId}/instances',
            location: null,
            pagination: true,
            paginationKey: 'pageToken'
        }
    },
    instanceTemplates: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/instanceTemplates',
            location: null,
            pagination: true
        }
    },
    instanceGroups: {
        aggregatedList: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/aggregated/instanceGroups',
            location: null,
            pagination: true
        }
    },
    instanceGroupManagers: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/zones/{locationId}/instanceGroupManagers',
            location: 'zone',
            pagination: true
        }
    },
    functions: {
        list : {
            url: 'https://cloudfunctions.googleapis.com/v1/projects/{projectId}/locations/{locationId}/functions',
            location: 'region',
            paginationKey: 'pageSize',
            pagination: true
        },
        sendIntegration: {
            enabled: true
        }
    },
    keyRings: {
        list: {
            url: 'https://cloudkms.googleapis.com/v1/projects/{projectId}/locations/{locationId}/keyRings',
            location: 'region',
            paginationKey: 'pageSize',
            pagination: true
        },
    },
    networks: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/networks',
            location: null,
            pagination: true
        },
        sendIntegration: serviceMap['VPC Network']
    },
    backendServices: {
        list: {
            url: 'https://compute.googleapis.com/compute/beta/projects/{projectId}/global/backendServices',
            location: null,
            pagination: true
        },
    },
    healthChecks: {
        list: {
            url: 'https://compute.googleapis.com/compute/beta/projects/{projectId}/global/healthChecks',
            location: null,
            pagination: true
        }
    },
    buckets: {
        list: {
            url: 'https://storage.googleapis.com/storage/v1/b?project={projectId}',
            location: null,
            pagination: true
        },
        sendIntegration: {
            enabled: true,
        }
    },
    targetHttpProxies: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/targetHttpProxies',
            location: null,
            pagination: true
        }
    },
    autoscalers: {
        aggregatedList: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/aggregated/autoscalers',
            location: null,
            pagination: true
        }
    },
    subnetworks: {
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/regions/{locationId}/subnetworks',
            location: 'region',
            pagination: true
        }
    },
    projects: {
        get: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}',
            pagination: false
        },
        getIamPolicy: {
            url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{projectId}:getIamPolicy',
            location: null,
            method: 'POST',
            pagination: false
        },
        getWithNumber: {
            url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{projectId}'
        }
    },
    kubernetes: {
        list: {
            url: 'https://container.googleapis.com/v1/projects/{projectId}/locations/-/clusters',
            location: null,
            pagination: false
        },
        sendIntegration: {
            enabled: true
        }
    },
    dataproc: {
        list: {
            url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{locationId}/clusters',
            location: 'region',
            pagination: true
        },
        sendIntegration: serviceMap['Dataproc']
    },
    cloudbuild: {
        triggers: {
            url: 'https://cloudbuild.clients6.google.com/v1/projects/{projectId}/locations/{locationId}/triggers',
            location: 'region',
            dataFilterKey: 'triggers'
        }
    },
    managedZones: {
        list: {
            url: 'https://dns.googleapis.com/dns/v1/projects/{projectId}/managedZones',
            location: null,
            pagination: true
        },
        sendIntegration: serviceMap['DNS']
    },
    metrics: {
        list: {
            url: 'https://logging.googleapis.com/v2/projects/{projectId}/metrics',
            location: null,
            pagination: true,
            paginationKey: 'pageSize'
        },
        sendIntegration: serviceMap['Logging']
    },
    alertPolicies: {
        list: {
            url: 'https://monitoring.googleapis.com/v3/projects/{projectId}/alertPolicies',
            location: null,
            pagination: true,
            paginationKey: 'pageSize'
        }
    },
    serviceAccounts: {
        list: {
            url: 'https://iam.googleapis.com/v1/projects/{projectId}/serviceAccounts',
            location: null,
            pagination: true,
            paginationKey: 'pageSize'
        }
    },
    sinks: {
        list: {
            url: 'https://logging.googleapis.com/v2/projects/{projectId}/sinks',
            location: null,
            pagination: true,
            paginationKey: 'pageSize'
        }
    },
    datasets: {
        list: {
            url: 'https://bigquery.googleapis.com/bigquery/v2/projects/{projectId}/datasets',
            location: null,
            pagination: true
        }
    },
    policies: {
        list: {
            url: 'https://dns.googleapis.com/dns/v1/projects/{projectId}/policies',
            location: null,
            pagination: true
        }
    },
    topics: {
        list: {
            url: 'https://pubsub.googleapis.com/v1/projects/{projectId}/topics',
            location: null,
            pagination: true,
            paginationKey: 'pageSize'
        },
        sendIntegration: serviceMap['Pub/Sub']
    },
    subscriptions: {
        list: {
            url: 'https://pubsub.googleapis.com/v1/projects/{projectId}/subscriptions',
            location: null,
            pagination: true,
            paginationKey: 'pageSize'
        }
    },
    jobs: {
        list: { //https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs:list
            url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/locations/{locationId}/jobs',
            location: 'region',
            pagination: true,
            paginationKey: 'pageSize'
        }
    },
    deployments: { // https://www.googleapis.com/deploymentmanager/v2/projects/project/global/deployments
        list: {
            url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{projectId}/global/deployments',
            location: null,
            pagination: true,
        },
        sendIntegration: serviceMap['Deployment Manager']
    },
    organizations:{ // https://cloudresourcemanager.googleapis.com/v1beta1/organizations
        list: {
            url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations',
            pagination: false
        }
    },
    urlMaps: { // https://compute.googleapis.com/compute/v1/projects/{project}/global/urlMaps
        list: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/urlMaps',
            location: null,
            pagination: true
        },
        sendIntegration: serviceMap['CLB']
    },
    apiKeys: {
        list: {
            url: 'https://apikeys.googleapis.com/v2/projects/{projectId}/locations/global/keys',
            location: null
        }
    },
    resourceRecordSets: {
        list: {
            url: 'https://dns.googleapis.com/dns/v1/projects/{projectId}/managedZones/{id}/rrsets',
            reliesOnService: ['managedZones'],
            reliesOnCall: ['list'],
            properties: ['id']
        }
    },
    accessApproval: {
        settings: {
            url: 'https://accessapproval.googleapis.com/v1/projects/{projectId}/accessApprovalSettings',
            pagination: true,
            paginationKey: 'pageSize'
        }
    }
};

var postcalls = {
    instances: {
        getIamPolicy: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/zones/{locationId}/instances/{id}/getIamPolicy',
            location: 'zone',
            reliesOnService: ['instances'],
            reliesOnCall: ['list'],
            properties: ['id'],
            pagination: false
        }
    },
    cryptoKeys: {
        list: {
            url: 'https://cloudkms.googleapis.com/v1/{name}/cryptoKeys',
            location: 'region',
            reliesOnService: ['keyRings'],
            reliesOnCall: ['list'],
            properties: ['name'],
            pagination: true,
            paginationKey: 'pageSize'
        },
        sendIntegration: serviceMap['Cryptographic Keys']
    },
    buckets: {
        getIamPolicy: {
            url: 'https://storage.googleapis.com/storage/v1/b/{name}/iam',
            location: null,
            reliesOnService: ['buckets'],
            reliesOnCall: ['list'],
            properties: ['name'],
            pagination: false
        },
        sendIntegration: {
            enabled: true,
            integrationReliesOn: {
                serviceName: ['buckets']
            }
        },
    },
    keys: {
        list: {
            url: 'https://iam.googleapis.com/v1/{name}/keys',
            reliesOnService: ['serviceAccounts'],
            reliesOnCall: ['list'],
            properties: ['name'],
            pagination: false
        }
    },
    users: {
        list: {
            url: 'https://sqladmin.googleapis.com/sql/v1beta4/projects/{projectId}/instances/{name}/users',
            location: null,
            reliesOnService: ['sql'],
            reliesOnCall: ['list'],
            properties: ['name'],
            pagination: true //needs to be verified with multiple users
        },
        sendIntegration: {
            enabled: true,
            integrationReliesOn: {
                serviceName: ['sql']
            }
        },
    },
    backupRuns: {
        list: {
            url: 'https://sqladmin.googleapis.com/sql/v1beta4/projects/{projectId}/instances/{name}/backupRuns',
            location: null,
            reliesOnService: ['sql'],
            reliesOnCall: ['list'],
            properties: ['name'],
            pagination: true
        },
        sendIntegration: {
            enabled: true,
            integrationReliesOn: {
                serviceName: ['sql']
            }
        },
    },
    datasets: {
        get: {
            url: 'https://bigquery.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}',
            location: null,
            reliesOnService: ['datasets'],
            reliesOnCall: ['list'],
            properties: ['datasetId'],
            subObj: ['datasetReference'],
            pagination: true
        }
    },
    bigqueryTables: {
        list: {
            url: 'https://bigquery.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables',
            location: null,
            reliesOnService: ['datasets'],
            reliesOnCall: ['list'],
            properties: ['datasetId'],
            subObj: ['datasetReference'],
            pagination: true,
            dataKey: 'tables'
        }
    },
    jobs: {
        get: { //https://dataflow.googleapis.com/v1b3/projects/{projectId}/jobs/{jobId}
            url: 'https://dataflow.googleapis.com/v1b3/projects/{projectId}/locations/{locationId}/jobs/{id}',
            reliesOnService: ['jobs'],
            reliesOnCall: ['list'],
            location: 'region',
            properties: ['id'],
            pagination: false,
        }
    },
    organizations: { //https://cloudresourcemanager.googleapis.com/v1beta1/{resource=organizations/*}:getIamPolicy
        getIamPolicy: {
            url:'https://cloudresourcemanager.googleapis.com/v1/organizations/{organizationId}:getIamPolicy',
            reliesOnService: ['organizations'],
            reliesOnCall: ['list'],
            properties: ['organizationId'],
            method: 'POST',
            pagination: false
        },
        listOrgPolicies: {
            url: 'https://cloudresourcemanager.googleapis.com/v1/organizations/{organizationId}:listOrgPolicies',
            reliesOnService: ['organizations'],
            reliesOnCall: ['list'],
            properties: ['organizationId'],
            method: 'POST',
            pagination: true,
            paginationKey: 'pageSize'
        },
        getCmekSettings: {
            url: 'https://logging.googleapis.com/v2/organizations/{organizationId}/cmekSettings',
            reliesOnService: ['organizations'],
            reliesOnCall: ['list'],
            properties: ['organizationId']
        },
        essentialContacts: {
            url: 'https://essentialcontacts.googleapis.com/v1/organizations/{organizationId}/contacts',
            reliesOnService: ['organizations'],
            reliesOnCall: ['list'],
            properties: ['organizationId'],
            pagination: true,
            paginationKey: 'pageSize'
        }
    },
    apiKeys: {
        get: {
            url: 'https://apikeys.googleapis.com/v2/{name}',
            reliesOnService: ['apiKeys'],
            reliesOnCall: ['list'],
            properties: ['name']
        }
    },
    images: {
        getIamPolicy: {
            url: 'https://compute.googleapis.com/compute/v1/projects/{projectId}/global/images/{name}/getIamPolicy',
            reliesOnService: ['images'],
            reliesOnCall: ['list'],
            properties: ['name'],
            pagination: false
        }
    },
    services: {
        listEnabled: {
            url: 'https://serviceusage.googleapis.com/v1/projects/{projectNumber}/services',
            reliesOnService: ['projects'],
            reliesOnCall: ['getWithNumber'],
            properties: ['projectNumber'],
            pagination: true,
            paginationKey: 'pageSize',
            reqParams: 'filter=state:ENABLED'
        }
    }
};

var tertiarycalls = {
    cryptoKeys: {
        getIamPolicy: {
            url: 'https://cloudkms.googleapis.com/v1/{name}:getIamPolicy',
            location: 'region',
            reliesOnService: ['cryptoKeys'],
            reliesOnCall: ['list'],
            properties: ['name'],
        }
    },
    bigqueryTables: {
        get: {
            url: 'https://bigquery.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
            location: null,
            reliesOnService: ['bigqueryTables'],
            reliesOnCall: ['list'],
            properties: ['datasetId', 'tableId'],
            subObj: ['tableReference'],
            pagination: true
        }
    },
};

module.exports = {
    calls: calls,
    postcalls: postcalls,
    tertiarycalls: tertiarycalls,
    serviceMap: serviceMap
};
