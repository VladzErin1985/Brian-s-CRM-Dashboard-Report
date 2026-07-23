export type LaneItem = {
  label: string
  status?: 'live' | 'draft' | 'pending'
  detail: string
}

export type Lane = {
  name: string
  summary: string
  items: LaneItem[]
}

export type SystemCard = {
  id: string
  title: string
  tagline: string
  icon: 'workflow' | 'database' | 'zap' | 'shield-check' | 'list-checks'
  lanes: Lane[]
}

export const overviewStats: { label: string; value: string }[] = [
  { label: 'Business Pipelines', value: '6' },
  { label: 'Custom Data Panels', value: '3' },
  { label: 'Automations Live', value: '2' },
  { label: 'Core System', value: 'Momentum AMS' },
]

export const systemCards: SystemCard[] = [
  {
    id: 'pipelines',
    title: 'Pipeline Architecture',
    tagline: 'The 6 stages your business runs through, end to end',
    icon: 'workflow',
    lanes: [
      {
        name: 'New Business',
        summary: '19 stages, from first contact through bound policy',
        items: [
          { label: 'Website Lead', detail: 'A new lead comes in from your website or another source.' },
          { label: 'Lead Created', detail: 'The lead is logged into the system as a record.' },
          { label: 'Lead Assigned', detail: 'The lead is assigned to an agent to follow up.' },
          { label: 'Initial Contact', detail: 'First outreach has been made to the prospect.' },
          { label: 'Appointment Scheduled', detail: 'A meeting or call has been booked.' },
          { label: 'Discovery Meeting', detail: 'The needs-discovery conversation has happened.' },
          { label: 'Documents Requested', detail: 'Paperwork needed to quote has been requested from the prospect.' },
          { label: 'Documents Received', detail: 'Requested paperwork has come back.' },
          { label: 'Coverage Review', detail: 'Reviewing what coverage actually fits the prospect’s situation.' },
          { label: 'Market Research', detail: 'Shopping the coverage across carriers.' },
          { label: 'Quotes Ordered', detail: 'Formal quotes have been requested from carriers.' },
          { label: 'Proposal Prepared', detail: 'A proposal is being put together for the prospect.' },
          { label: 'Proposal Presented', detail: 'The proposal has been presented to the prospect.' },
          { label: 'Follow-Up 1 / 2 / 3', detail: 'Structured follow-up touchpoints after the proposal, so nothing falls through the cracks.' },
          { label: 'Quotes Received', detail: 'Carrier quotes are back and ready to compare.' },
          { label: 'Lost', detail: 'The prospect went a different direction.' },
          { label: 'Bound / Won', detail: 'The policy is bound — a new client.' },
        ],
      },
      {
        name: 'Renewal',
        summary: 'Tracks existing policies as they approach renewal',
        items: [
          { label: 'Annual Policy Review', detail: 'Scheduled yearly check-in on the policy.' },
          { label: 'Renewal Below %', detail: 'Renewal premium came in below the expected threshold.' },
          { label: 'Renewal Above %', detail: 'Renewal premium came in above the expected threshold — worth a closer look.' },
          { label: 'Complete / Auto-Renewal', detail: 'The renewal has gone through.' },
        ],
      },
      {
        name: 'Service',
        summary: 'Day-to-day service requests from existing clients',
        items: [
          { label: 'Change Requested', detail: 'A client has asked for a change to their policy or account.' },
          { label: 'Assigned', detail: 'The request has been assigned to a team member.' },
          { label: 'Carrier Processed', detail: 'The carrier has processed the change.' },
          { label: 'Completed', detail: 'The change is finished.' },
          { label: 'Client Notified', detail: 'The client has been told the change is done.' },
          { label: 'Closed', detail: 'The request is fully closed out.' },
        ],
      },
      {
        name: 'New Client Onboarding',
        summary: 'What happens right after a policy is bound',
        items: [
          { label: 'Policy Bound', detail: 'Starting point — the policy has just been bound.' },
          { label: 'Welcome Email / Text', detail: 'New client gets a welcome message.' },
          { label: 'Thank You Card', detail: 'A physical thank-you is sent.' },
          { label: 'Docs Delivered', detail: 'Policy documents are delivered to the client.' },
          { label: 'Billing Explained', detail: 'Client understands how and when they’ll be billed.' },
          { label: 'Portal Setup', detail: 'Client is set up on the client portal.' },
          { label: 'Coverage Review', detail: 'A review confirms the client understands their coverage.' },
          { label: 'Claims Process Intro', detail: 'Client is walked through what to do if they ever need to file a claim.' },
          { label: 'Referral Request', detail: 'A natural ask for referrals once the client is settled in.' },
          { label: 'Google Review Request', detail: 'Ask for a review once the experience has been positive.' },
          { label: '30-Day Check-In', detail: 'A check-in a month after binding.' },
          { label: 'Complete', detail: 'Onboarding is finished — client moves into normal service.' },
        ],
      },
      {
        name: 'Active Client Care',
        summary: 'Ongoing relationship touchpoints for current clients',
        items: [
          { label: 'Birthday', detail: 'A personal touchpoint on the client’s birthday.' },
          { label: 'Quarterly Touchpoint', detail: 'A regular check-in, every quarter.' },
          { label: 'Seasonal Safety Email', detail: 'Seasonal tips relevant to their coverage.' },
          { label: 'Life Event Check-In', detail: 'Checking in after a major life event that might affect coverage.' },
          { label: 'Cross-Sell Opportunity', detail: 'A moment where another line of coverage might make sense.' },
          { label: 'Claims Follow-Up', detail: 'Following up after a claim has been filed.' },
          { label: 'Policy Change Requests', detail: 'Tracks any changes the client has asked for.' },
          { label: 'Referral Opportunity', detail: 'A moment to naturally ask for a referral.' },
          { label: 'Annual Coverage Review', detail: 'A yearly full review of the client’s coverage.' },
        ],
      },
      {
        name: 'Claims',
        summary: 'Tracks a claim from report to resolution',
        items: [
          { label: 'Reported', detail: 'The claim has just been reported.' },
          { label: 'Carrier Assigned', detail: 'The carrier has been notified and assigned.' },
          { label: 'Adjuster Assigned', detail: 'An adjuster is now on the claim.' },
          { label: 'Client Check-In', detail: 'Checking in with the client during the claims process.' },
          { label: '30-Day Follow-Up', detail: 'A follow-up a month into the claim.' },
          { label: 'Closed', detail: 'The claim is resolved.' },
          { label: 'Satisfaction Follow-Up', detail: 'Confirming the client was satisfied with how the claim was handled.' },
        ],
      },
    ],
  },
  {
    id: 'fields',
    title: 'Custom Data Fields',
    tagline: 'The extra information tracked on every record, beyond the basics',
    icon: 'database',
    lanes: [
      {
        name: 'Prospect & Insured Details',
        summary: 'Tracked on every prospect and insured record',
        items: [
          { label: 'Personal Lines Interest', detail: 'Yes/No — whether this person is interested in personal coverage.' },
          { label: 'Commercial Lines Interest', detail: 'Yes/No — whether this person is interested in commercial coverage.' },
          { label: 'Employee Count', detail: 'For commercial prospects, how many employees they have.' },
          { label: 'Annual Revenue', detail: 'For commercial prospects, their annual revenue.' },
          { label: 'Preferred Coverage Limit', detail: 'What coverage limit the prospect has said they want.' },
          { label: 'Household Size', detail: 'For personal-lines prospects, how many people are in the household.' },
        ],
      },
      {
        name: 'Referral Partner Details',
        summary: 'Tracked on every referral source',
        items: [
          { label: 'Partner Profession', detail: 'What the referral partner does for a living.' },
          { label: 'Last Touchpoint Date', detail: 'The last time this partner was contacted.' },
          { label: 'Referrals This Year', detail: 'How many referrals this partner has sent this year.' },
          { label: 'Partnership Anniversary', detail: 'The anniversary date of the referral relationship.' },
        ],
      },
      {
        name: 'Policy Details',
        summary: 'Tracked on every policy',
        items: [
          { label: 'Cross-Sell Reviewed', detail: 'Whether this policy has been reviewed for cross-sell opportunities.' },
          { label: 'Renewal Alert Sent', detail: 'Tracks how many renewal alerts have gone out for this policy.' },
        ],
      },
    ],
  },
  {
    id: 'automations',
    title: 'Automations',
    tagline: 'What fires automatically as records move through the system',
    icon: 'zap',
    lanes: [
      {
        name: 'New Prospect — Welcome Email',
        summary: 'Fires when a new prospect enters the system',
        items: [
          { label: 'Trigger', detail: 'Fires the moment a new Prospect record is created.' },
          { label: 'Welcome Email', status: 'live', detail: 'A personalized acknowledgment email confirming we’ve received their information and someone will follow up shortly.' },
          { label: 'Follow-Up Task', status: 'live', detail: 'A task is automatically created for the assigned team member to personally follow up.' },
        ],
      },
      {
        name: 'Contacted — Follow-Up Email',
        summary: 'Fires when a prospect reaches Initial Contact',
        items: [
          { label: 'Trigger', detail: 'Fires when a prospect’s opportunity reaches the Initial Contact stage of the pipeline.' },
          { label: 'Follow-Up Email', status: 'live', detail: 'A warmer follow-up referencing the conversation, letting them know options are being prepared.' },
          { label: 'Follow-Up Task', status: 'live', detail: 'A task is automatically created for the assigned team member.' },
        ],
      },
      {
        name: 'Quoted — Follow-Up Sequence',
        summary: 'Fires when a prospect’s options come back from carriers',
        items: [
          { label: 'Trigger', detail: 'Fires when a prospect’s opportunity reaches the Quotes Received stage of the pipeline.' },
          { label: 'Day 1 — Your Options Are Ready', status: 'draft', detail: 'Lets them know their options are ready to review and compare.' },
          { label: 'Day 3 — What Actually Matters', status: 'draft', detail: 'Helps them understand what to actually weigh beyond price alone.' },
          { label: 'Day 6 — Coverage vs. Price', status: 'draft', detail: 'Addresses the natural hesitation between the lower-cost option and full coverage.' },
          { label: 'Day 10 — Gentle Reminder', status: 'draft', detail: 'A friendly nudge that quotes don’t stay valid indefinitely.' },
          { label: 'Day 14 — Final Check-In', status: 'pending', detail: 'A last, low-pressure touch — still being finished.' },
        ],
      },
    ],
  },
  {
    id: 'health',
    title: 'System Health',
    tagline: 'What a recent full review of the system found',
    icon: 'shield-check',
    lanes: [
      {
        name: 'Pipeline Review',
        summary: 'A full check of every stage currently in the system',
        items: [
          { label: 'Stages confirmed correct', detail: 'The full New Business, Renewal, and lifecycle-pipeline stage structure was checked end to end and matches what was built.' },
          { label: 'A few stages outside the main pipeline', detail: 'A handful of stages were found that aren’t part of the pipeline structure above — flagged separately for a quick decision on whether to keep, merge, or clean them up.' },
        ],
      },
      {
        name: 'Real Records Check',
        summary: 'Spot-checked live prospect/opportunity data against the pipeline',
        items: [
          { label: 'One prospect’s opportunities found outside the main flow', detail: 'A set of real opportunities were found sitting in a stage from before the pipeline was fully built out — likely just needs moving into the correct stage, already flagged for review.' },
        ],
      },
    ],
  },
  {
    id: 'next',
    title: 'Status & Next Steps',
    tagline: 'What’s left before everything goes fully live',
    icon: 'list-checks',
    lanes: [
      {
        name: 'Open Items',
        summary: 'Both automations above are now live — here’s what’s still open',
        items: [
          { label: 'Stage review', status: 'pending', detail: 'A few pipeline stages found outside the main flow need a quick decision from you — keep, merge, or clean up.' },
          { label: 'Monitoring first real runs', status: 'pending', detail: 'Both automations are turned on and being watched to confirm they fire correctly on real prospects before we move to the next round of automations.' },
        ],
      },
    ],
  },
]
