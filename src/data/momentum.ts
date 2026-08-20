export type LaneItem = {
  label: string
  status?: 'live' | 'draft' | 'pending' | 'blocked'
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
  icon: 'workflow' | 'database' | 'zap' | 'shield-check' | 'list-checks' | 'map' | 'message-square' | 'sparkles'
  lanes: Lane[]
}

export type FlowStep = {
  label: string
  flag?: string
}

export const overviewStats: { label: string; value: string }[] = [
  { label: 'Business Pipelines', value: '6' },
  { label: 'Custom Data Panels', value: '3' },
  { label: 'Automations Live', value: '4' },
  { label: 'Core System', value: 'Momentum AMS' },
]

export const projectFlow: FlowStep[] = [
  { label: 'Marketing / Referral Source' },
  { label: 'Lead Enters CRM' },
  { label: 'Automated Welcome & Follow-Up' },
  { label: 'Calls, Emails, Texts, Tasks & Appointments', flag: 'Texting automation on hold — pending Twilio setup' },
  { label: 'Proposal Presented' },
  { label: 'Prospect Becomes a Client' },
  { label: 'Managed in Momentum' },
]

export const pipelineFlows: { title: string; summary: string; steps: FlowStep[] }[] = [
  {
    title: 'New Client Onboarding',
    summary: '12 steps, right after a policy is bound — Phase 3 of the roadmap',
    steps: [
      { label: 'Policy Bound' },
      { label: 'Welcome Email / Text', flag: 'Text portion on hold — pending Twilio setup' },
      { label: 'Thank You Card' },
      { label: 'Docs Delivered' },
      { label: 'Billing Explained' },
      { label: 'Portal Setup' },
      { label: 'Coverage Review' },
      { label: 'Claims Process Intro' },
      { label: 'Referral Request' },
      { label: 'Google Review Request' },
      { label: '30-Day Check-In' },
      { label: 'Complete' },
    ],
  },
  {
    title: 'Active Client Care',
    summary: '9 ongoing touchpoints for current clients — Phase 4 of the roadmap',
    steps: [
      { label: 'Birthday' },
      { label: 'Quarterly Touchpoint' },
      { label: 'Seasonal Safety Email' },
      { label: 'Life Event Check-In' },
      { label: 'Cross-Sell Opportunity' },
      { label: 'Claims Follow-Up' },
      { label: 'Policy Change Requests' },
      { label: 'Referral Opportunity' },
      { label: 'Annual Coverage Review' },
    ],
  },
  {
    title: 'Renewal Timeline',
    summary: '120 days out to renewal date — Phase 5 of the roadmap',
    steps: [
      { label: '120 Days Out — Educational Email' },
      { label: '90 Days Out — Text Reminder', flag: 'On hold — pending Twilio setup' },
      { label: '60 Days Out — Coverage Review' },
      { label: '45 Days Out — Internal Reminder' },
      { label: '30 Days Out — Client Meeting' },
      { label: '15 Days Out — Proposal' },
      { label: '5 Days Out — Follow-Up' },
      { label: 'Renewal Date — Thank You' },
    ],
  },
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
        summary: '8 stages, tracking existing policies as they approach renewal',
        items: [
          { label: 'Annual Policy Review', detail: 'Scheduled yearly check-in on the policy.' },
          { label: 'Carrier Download Received', detail: 'The renewal information has come back from the carrier.' },
          { label: 'Remarketing', detail: 'Shopping the renewal across carriers if it needs a second look.' },
          { label: 'Renewal Upcoming', detail: 'The renewal date is approaching.' },
          { label: 'Renewal Below %', detail: 'Renewal premium came in below the expected threshold.' },
          { label: 'Renewal Above %', detail: 'Renewal premium came in above the expected threshold — worth a closer look.' },
          { label: 'Renewed', detail: 'The renewal has been confirmed with the client.' },
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
          { label: 'Follow-Up Email', status: 'live', detail: 'A warmer follow-up referencing the conversation, letting them know options are being prepared. Confirmed live on two separate real test records — the automated trigger now fires the email correctly on its own, no manual send needed.' },
          { label: 'Follow-Up Task', status: 'live', detail: 'A task is automatically created for the assigned team member. Confirmed working on a real record.' },
        ],
      },
      {
        name: 'Quoted — Follow-Up Sequence',
        summary: 'Fires when a prospect’s options come back from carriers',
        items: [
          { label: 'Trigger', detail: 'Fires when a prospect’s opportunity reaches the Quotes Received stage of the pipeline.' },
          { label: 'Day 1 — Your Options Are Ready', status: 'live', detail: 'Lets them know their options are ready to review and compare.' },
          { label: 'Day 3 — What Actually Matters', status: 'live', detail: 'Helps them understand what to actually weigh beyond price alone.' },
          { label: 'Day 6 — Coverage vs. Price', status: 'live', detail: 'Addresses the natural hesitation between the lower-cost option and full coverage.' },
          { label: 'Day 10 — Gentle Reminder', status: 'live', detail: 'A friendly nudge that quotes don’t stay valid indefinitely.' },
          { label: 'Day 14 — Final Check-In', status: 'live', detail: 'A last, low-pressure final touch, letting them know there’s no obligation either way.' },
        ],
      },
      {
        name: 'Annual Review — Cross-Sell',
        summary: 'Fires once a year, on each policy’s own anniversary',
        items: [
          { label: 'Trigger', detail: 'Fires automatically 365 days after a policy’s effective date — repeats every year on that policy’s own anniversary.' },
          { label: 'Coverage Check Email', status: 'live', detail: 'A soft, personal note checking that the client’s full coverage picture is up to date — framed as a review, not a sales pitch.' },
          { label: 'Review Task', status: 'live', detail: 'An internal task for the team to actually review the account and confirm it’s been checked. Built and live.' },
        ],
      },
      {
        name: 'New Client Onboarding — Welcome Through 30-Day Check-In',
        summary: 'Fires once a policy is bound and a client enters onboarding — built, not yet turned on',
        items: [
          { label: 'Trigger', detail: 'Fires when a new client record is created after a policy is bound.' },
          { label: 'Welcome Email', status: 'draft', detail: 'A personal note letting the new client know what happens next. The text-message half of this step is still on hold, same as everywhere else texting is involved.' },
          { label: 'Thank You Card Task', status: 'draft', detail: 'An internal reminder for the team to send a thank-you card.' },
          { label: 'Docs Delivered Task', status: 'draft', detail: 'An internal task confirming policy documents have gone out.' },
          { label: 'Billing Explained Email', status: 'draft', detail: 'Walks the client through how and when they’ll be billed, using your own real answer on how billing works for Shield Point. Finished and entered.' },
          { label: 'Portal Setup Task', status: 'draft', detail: 'An internal task confirming the client is set up on the client portal.' },
          { label: 'Coverage Review Task', status: 'draft', detail: 'An internal task confirming coverage has been reviewed with the client.' },
          { label: 'Claims Process Intro Email', status: 'draft', detail: 'Walks the client through what to do if they ever need to file a claim.' },
          { label: 'Referral Request Email', status: 'draft', detail: 'A natural, low-pressure ask for referrals once the client is settled in.' },
          { label: 'Google Review Request Email', status: 'draft', detail: 'Asks for a review once the experience has been a good one, using your own real link and QR code. Finished and entered.' },
          { label: '30-Day Check-In (Task + Email)', status: 'draft', detail: 'A one-month check-in, both an internal task and a client email.' },
        ],
      },
      {
        name: 'Referral Partner — 45-Day No-Contact Alert',
        summary: 'Built and correctly scoped — waiting on your real partner list before turning it on',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Meant to fire 45 days after a referral partner’s last touchpoint. Now correctly scoped to only Referral Partner-tagged records — the tagging gap that was blocking this is fixed. Ready to activate.' },
          { label: 'Check-In Task', status: 'draft', detail: 'An internal reminder to check in with the partner and log the touchpoint. Built and ready — sitting behind the referral partner list below.' },
          { label: 'Referral partner list', status: 'pending', detail: 'Still confirming with you who your actual referral partners are so they can be set up properly in the system.' },
        ],
      },
      {
        name: 'Active Client Care — Birthday',
        summary: 'Built and correctly timed — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires on the client’s actual birthday. Caught and fixed a timing bug during build — it was originally set to fire a day late, corrected to fire on the real day.' },
          { label: 'Birthday Email', status: 'draft', detail: 'A warm, personal note wishing the client a happy birthday — explicitly no sales content, framed as a thank-you for being a client, not a pitch.' },
        ],
      },
      {
        name: 'Active Client Care — Claims Follow-Up',
        summary: 'Built for your 3 most common claim types — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires while a claim is open, covering your 3 most common claim types — Automobile Loss, Property Loss, and General Liability — built as 3 separate workflows since Momentum requires its own trigger per claim type rather than one general "any claim" option. The remaining 4 types (Commercial Auto, Medical/Healthcare, Other, Worker Compensation) aren’t built yet.' },
          { label: 'Claims Follow-Up Email', status: 'draft', detail: 'A warm, supportive check-in while the claim is still active, letting the client know the team is there to help — no sales content, same message used across all 3 workflows.' },
        ],
      },
      {
        name: 'Active Client Care — Quarterly Check-In',
        summary: 'Two check-ins built for now (90 and 270 days into the policy year) — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires 90 days and 270 days after a policy’s effective date — built as 2 separate workflows since Momentum only supports a one-time day offset per trigger, not a repeating cadence. A true quarterly cadence would need 2 more (180 and 360 days); started with 2 for now and can add the rest once we know if strict quarterly timing matters to you.' },
          { label: 'Check-In Email', status: 'draft', detail: 'A simple, no-sales check-in asking if anything has changed (new vehicle, move, renovation) that might affect coverage — same message used on both workflows.' },
        ],
      },
      {
        name: 'Active Client Care — Referral Opportunity',
        summary: 'Built and correctly timed — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires 60 days after a policy’s effective date — enough time for a client to have settled in and formed a real opinion before being asked.' },
          { label: 'Referral Ask Email', status: 'draft', detail: 'A warm, low-pressure ask for a referral if they’ve been happy with their experience — no sales content, no pressure if they haven’t.' },
        ],
      },
      {
        name: 'Active Client Care — Policy Change Tracking',
        summary: 'Built for your 3 most common request types — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires when a client submits a service request, covering the 3 broadest request types — General, General New, and Policy Change Request - Other — built as 3 separate workflows since Momentum requires its own trigger per request type rather than one general option. More specific types (Add Driver, Address Change, etc.) aren’t built yet.' },
          { label: 'Acknowledgment Email', status: 'draft', detail: 'A quick note confirming the request was received and is being worked on — no sales content, same message used across all 3 workflows.' },
        ],
      },
      {
        name: 'Active Client Care — Seasonal Safety Email',
        summary: 'Content ready — sent as a yearly manual send, not a Momentum automation',
        items: [
          { label: 'Why not a Momentum workflow', status: 'draft', detail: 'Checked every available trigger option in Momentum — none of them can fire on a shared calendar date across your whole client list. Every trigger is tied to an individual record’s own date (their policy date, their birthday), not a fixed date like "everyone gets this on November 1st." So this one genuinely can’t be automated the way the others were.' },
          { label: 'Winter Prep Email', status: 'draft', detail: 'Content is written and ready, focused on winter freeze prep per your confirmation — pipe insulation, heating system checks, shutting off exterior water valves. Meant to go out once a year, in early-to-mid November, as a bulk send rather than a triggered automation.' },
        ],
      },
      {
        name: 'Active Client Care — Life-Event Check-In',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Momentum has no direct signal for a client mentioning a life event (marriage, new baby, new home, etc.), so this fires off a dedicated task category — when your team logs a "Life Event" task on a client, the check-in email goes out automatically the next day.' },
          { label: 'Check-In Email', status: 'draft', detail: 'A warm, no-pressure note asking to revisit their coverage after a life milestone — no sales content.' },
        ],
      },
      {
        name: 'Active Client Care — Annual Review & Cross-Sell',
        summary: 'Already live and running — covers both the annual coverage review and cross-sell touchpoints in one',
        items: [
          { label: 'Trigger', status: 'live', detail: 'Fires once a year, 365 days after each policy\'s effective date. This one workflow already covers what would\'ve been two separate touchpoints (annual coverage review + cross-sell opportunity) — no new build needed for either.' },
          { label: 'Coverage Check Email', status: 'live', detail: 'A warm, low-pressure note inviting a full coverage review. Found and fixed a real accuracy issue: it used to name a specific line of business as the assumed gap for every client, which wasn\'t true for everyone — reworded to be accurate regardless of what a client actually has or is missing.' },
        ],
      },
      {
        name: 'Claims Pipeline — Reported',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires the day after a new task is logged in your Claim category — this is your team\'s real signal that a client has reported a claim.' },
          { label: 'Claim Received Email', status: 'draft', detail: 'A warm, reassuring note letting the client know their claim is in hand and explaining what happens next — no sales content.' },
        ],
      },
      {
        name: 'Claims Pipeline — Closed',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires when a claim task\'s status is marked Closed.' },
          { label: 'Claim Closed Email', status: 'draft', detail: 'A short, appreciative note letting the client know their claim has been resolved, with the door left open for follow-up questions — no sales content.' },
        ],
      },
      {
        name: 'Claims Pipeline — Carrier Assigned',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires off a dedicated task category your team logs when a carrier is assigned to a claim — same category-based method already working for Life-Event Check-In.' },
          { label: 'Carrier Assigned Email', status: 'draft', detail: 'A short note letting the client know their claim is now with a carrier and is being actively handled — no sales content.' },
        ],
      },
      {
        name: 'Claims Pipeline — Adjuster Assigned',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires off a dedicated task category your team logs when an adjuster is assigned to a claim.' },
          { label: 'Adjuster Assigned Email', status: 'draft', detail: 'A reassuring note letting the client know an adjuster is now on their claim, with next-steps framing — no sales content.' },
        ],
      },
      {
        name: 'Claims Pipeline — Client Check-In',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires off a dedicated task category your team logs mid-process, while a claim is still active.' },
          { label: 'Check-In Email', status: 'draft', detail: 'A brief mid-process note asking how things are going and leaving the door open for questions — no sales content.' },
        ],
      },
      {
        name: 'Claims Pipeline — 30-Day Follow-Up',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires off a dedicated task category your team logs 30 days into a claim that\'s still open.' },
          { label: 'Follow-Up Email', status: 'draft', detail: 'A short check-in confirming the claim is still being actively worked and the client hasn\'t been forgotten — no sales content.' },
        ],
      },
      {
        name: 'Claims Pipeline — Satisfaction Follow-Up',
        summary: 'Built and correctly scoped — ready to activate whenever you are',
        items: [
          { label: 'Trigger', status: 'draft', detail: 'Fires off a dedicated task category your team logs once a claim is closed and enough time has passed to ask how it went.' },
          { label: 'Satisfaction Email', status: 'draft', detail: 'A short "how did we do" note checking in on the client\'s experience with the claims process — kept separate from the onboarding review request, no sales content.' },
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
          { label: 'Contacted automation — confirmed fixed', detail: 'Confirmed on two separate real test records: both the internal follow-up task and the client-facing email now fire correctly and automatically. The bug that was silently blocking the email is fixed.' },
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
        summary: 'New Prospect, Contacted, the Quoted-sequence, and Annual Review — Cross-Sell are all live — here’s what’s still open',
        items: [
          { label: 'Stage review', status: 'pending', detail: 'A few pipeline stages found outside the main flow need a quick decision from you — keep, merge, or clean up.' },
          { label: 'New Client Onboarding — ready, awaiting your go-ahead', status: 'draft', detail: 'The full onboarding sequence (Welcome through 30-Day Check-In) is fully drafted, built, and now content-complete — the billing email and Google review request both use your own real content. Sitting ready, waiting on your go-ahead to turn it on.' },
          { label: 'Referral Partner — ready, waiting on your partner list', status: 'draft', detail: 'The 45-day no-contact alert is built and now correctly scoped to referral partners only. Just needs your confirmation of who your actual referral partners are before it goes live.' },
        ],
      },
    ],
  },
  {
    id: 'feature-map',
    title: 'What Momentum Can Still Do — New Automation Candidates, For Your Review',
    tagline: 'A closer look at what your Momentum account already offers that isn\'t being used yet — real opportunities to expand automation further',
    icon: 'zap',
    lanes: [
      {
        name: 'Policy Endorsements — Not Yet Automated',
        summary: 'A real gap found: an endorsement going through has no client touchpoint today',
        items: [
          { label: 'What was found', status: 'pending', detail: 'Policy Change Tracking (already live) covers requests a client submits, but doesn\'t cover an actual endorsement once it\'s processed on a policy. Right now, nothing lets a client know once that change has actually gone through.' },
          { label: 'What this could look like', status: 'pending', detail: 'A short, no-sales confirmation email the moment an endorsement completes on a policy — same pattern already used everywhere else on this dashboard.' },
        ],
      },
      {
        name: 'Pre-Built Cross-Sell Templates — Never Reviewed',
        summary: 'Momentum ships ready-made cross-sell workflows sitting unused in your account',
        items: [
          { label: 'What was found', status: 'pending', detail: 'Your account already includes 6 pre-built cross-sell templates — Term Life, Umbrella, Auto, Earthquake, Flood, and Home — that have never been reviewed or turned on. These could be a faster starting point than building new cross-sell automations from scratch.' },
          { label: 'Why it matters', status: 'pending', detail: 'Your account carries a very wide range of coverage types, and only a small number currently have any cross-sell automation touching them at all. These templates are a ready-made way to close that gap faster than a from-scratch build.' },
        ],
      },
      {
        name: 'Document Signing — Not Yet Connected to Automation',
        summary: 'A signature-completion trigger exists in Momentum but has never been used',
        items: [
          { label: 'What was found', status: 'pending', detail: 'Momentum has a trigger for when a document is signed that isn\'t wired into any workflow yet — a natural fit for a signed-document confirmation or next-step automation.' },
        ],
      },
      {
        name: 'Service Center Tickets — Same Proven Pattern, Quick to Add',
        summary: 'A quick win using the exact acknowledgment approach already live elsewhere',
        items: [
          { label: 'What was found', status: 'pending', detail: 'Support tickets logged in Momentum have their own dedicated trigger, separate from service requests, that isn\'t automated yet. The same acknowledgment-email approach already live on Policy Change Tracking could apply here with very little new design work.' },
        ],
      },
      {
        name: 'Round Robin Task Assignment — Future, Once the Team Grows',
        summary: 'A real feature already in your account, just not useful yet with a team of one',
        items: [
          { label: 'What was found', status: 'pending', detail: 'Momentum has a built-in way to automatically rotate incoming tasks across multiple staff members instead of assigning them all to one person.' },
          { label: 'Why it\'s not being built now', status: 'pending', detail: 'Right now it\'s just you in the system — rotation only matters once there\'s more than one person to rotate across. Not worth setting up before then.' },
          { label: 'When to revisit', status: 'pending', detail: 'The moment a VA or another agent joins the team, this becomes worth turning on. Flagging it now so it\'s not forgotten later.' },
        ],
      },
    ],
  },
  {
    id: 'roadmap',
    title: 'Proposed Roadmap — For Your Review',
    tagline: 'Based on your own documents, pipelines, and stated priorities. This is a draft, not final — let us know what needs adjusting.',
    icon: 'map',
    lanes: [
      {
        name: 'Phase 1 — Sales: First Contact',
        summary: 'Complete, no texting required',
        items: [
          { label: 'New Prospect', status: 'live', detail: 'Acknowledgment email + follow-up task when a new prospect comes in.' },
          { label: 'Contacted', status: 'live', detail: 'Follow-up email + task once a prospect reaches Initial Contact.' },
          { label: 'Quoted-Stage Sequence', status: 'live', detail: 'Five-email sequence guiding a prospect from receiving their quote to a decision. Fully built and live.' },
        ],
      },
      {
        name: 'Phase 2 — Rest of the Sales Pipeline',
        summary: 'In progress, no texting required',
        items: [
          { label: 'Annual Review Task', status: 'live', detail: 'Reminds the team to revisit a client’s coverage on a set schedule. Fully built and live — yearly trigger, client email, and internal review task all in place.' },
          { label: 'Referral Partner Touchpoints', status: 'pending', detail: 'Quarterly review task, a 45-day no-contact alert, and thank-you/anniversary messages for referral partners.' },
        ],
      },
      {
        name: 'Phase 3 — New Client Onboarding',
        summary: '12 stages — full sequence now drafted and built, pending final review',
        items: [
          { label: 'Onboarding Touchpoints', status: 'draft', detail: 'Welcome Email, Thank You Card, Docs Delivered, Portal Setup, Coverage Review, Claims Process Intro, Referral Request, Billing Explained, Google Review Request, and 30-Day Check-In are all drafted and built — every touchpoint is now content-complete, ready for your go-ahead to go live.' },
          { label: 'Welcome Message', status: 'blocked', detail: 'Your own plan calls for this as an email + text — the text portion is on hold until texting automation is unblocked.' },
        ],
      },
      {
        name: 'Phase 4 — Active Client Care',
        summary: '9 touchpoints total, 7 of 9 built as automations, 1 already live from before, 1 content-ready as a manual send — no texting required',
        items: [
          { label: 'Birthday message', status: 'draft', detail: 'Built and ready to activate — see the Automations section above for full detail.' },
          { label: 'Claims Follow-Up message', status: 'draft', detail: 'Built for your 3 most common claim types (Automobile Loss, Property Loss, General Liability) — see the Automations section above for full detail.' },
          { label: 'Quarterly check-in', status: 'draft', detail: 'Two check-ins built for now (90 and 270 days into the policy year) — see the Automations section above for full detail.' },
          { label: 'Referral opportunity', status: 'draft', detail: 'Built and ready to activate — see the Automations section above for full detail.' },
          { label: 'Policy change tracking', status: 'draft', detail: 'Built for your 3 most common request types (General, General New, Policy Change Request - Other) — see the Automations section above for full detail.' },
          { label: 'Seasonal safety email', status: 'draft', detail: 'Content is written and ready (winter freeze prep, per your confirmation), but Momentum has no way to trigger a message on a shared calendar date across your whole client list — every trigger is tied to an individual record’s own date, not a fixed date. This one will need to go out as a yearly manual bulk send instead of an automation.' },
          { label: 'Life-event check-in', status: 'draft', detail: 'Built and ready to activate, triggered off a dedicated task category your team logs when a client mentions a life event — see the Automations section above for full detail.' },
          { label: 'Annual coverage review + cross-sell', status: 'live', detail: 'Already covered by a workflow that\'s been live since before this dashboard existed — see the Automations section above for full detail. All 9 touchpoints are now accounted for.' },
        ],
      },
      {
        name: 'Phase 5 — Renewal Automation',
        summary: 'Blocked until texting is unblocked',
        items: [
          { label: 'Full Renewal Timeline', status: 'blocked', detail: 'Your documented 120-day-to-5-day renewal sequence includes a required text step at the 90-day mark — waiting on texting automation before this can be built.' },
        ],
      },
      {
        name: 'Phase 6 — Long-Term Vision',
        summary: 'From your own stated goals, further out — one item below needs your input',
        items: [
          { label: 'Claims Pipeline Automation', status: 'draft', detail: 'Checked what Momentum can actually automate across your documented 7-stage claims process — at first it could only reliably distinguish 2 of those moments (a claim being reported, and a claim being closed), since the platform has no native way to tell the 5 stages in between apart. Closed the rest of the gap by creating a dedicated task category for each remaining stage (Carrier Assigned, Adjuster Assigned, Client Check-In, 30-Day Follow-Up, Satisfaction Follow-Up) so each one triggers its own automation, the same method already working for the Life-Event Check-In automation. All 7 stages are now built, see the Automations section above — ready to activate whenever you are.' },
          { label: 'Referral Partner Pipeline — Needs Your Review', status: 'pending', detail: 'Worth flagging directly: you told us this is one of your highest priorities, but your written plan places it here, in the long-term phase. We followed the written plan for this draft, but wanted to check with you directly — should this move up into an earlier phase, or has the priority shifted since you wrote that? Let us know either way.' },
          { label: 'Marketing & Commercial Risk Management Pipelines', status: 'pending', detail: 'The remaining two pipelines from your long-term vision.' },
          { label: 'Marketing Content Support', status: 'pending', detail: 'Getting your marketing assistant fully set up to create branded video content at scale. Worth knowing this connects directly to the AI Lead-Gen project below — YouTube mentions are one of the strongest real signals AI tools use to decide what to cite, so this isn\'t just a marketing nice-to-have, it feeds the same visibility goal.' },
        ],
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication Tools Status',
    tagline: 'Where texting and calling automation actually stand right now',
    icon: 'message-square',
    lanes: [
      {
        name: 'Lightspeed Voice — Working Well for Calls',
        summary: 'Confirmed working today, no changes needed',
        items: [
          { label: 'Call Logging', status: 'live', detail: 'Calls are automatically transcribed and logged to the client record — nothing further needed here.' },
        ],
      },
      {
        name: 'The Gap — Lightspeed Can’t Do Automated Texting',
        summary: 'A platform limitation, confirmed directly with Momentum — not specific to your account or something Lightspeed did wrong',
        items: [
          { label: 'Why Texting Doesn’t Work Through Lightspeed', status: 'blocked', detail: 'Momentum’s automation engine simply cannot send texts through Lightspeed — confirmed directly by Momentum’s own team. Lightspeed remains the right tool for calls; it was never built to handle Momentum-triggered texting, regardless of how it was positioned during onboarding.' },
          { label: 'Why Twilio, Specifically', status: 'blocked', detail: 'Twilio is the tool Momentum itself recommends to close this exact gap — it becomes the sending line for automated texts, while every template and trigger still gets built and managed inside Momentum, same as everything else on this dashboard. Lightspeed keeps handling calls; Twilio only handles the piece Lightspeed can’t.' },
        ],
      },
      {
        name: 'Twilio Setup — In Progress',
        summary: 'Where this stands right now',
        items: [
          { label: 'Account Request Submitted', status: 'pending', detail: 'Waiting on approval before the next step can start.' },
          { label: 'Carrier Registration Next', status: 'pending', detail: 'Once approved, a required registration step for US business texting typically takes a few weeks before real messages can go out — this is a carrier requirement, not something we control the timeline on.' },
        ],
      },
      {
        name: 'Why This Takes Care to Get Right',
        summary: 'Compliance requirements, not optional steps',
        items: [
          { label: 'Consent Requirement', status: 'pending', detail: 'US law requires clear opt-in consent before sending marketing or automated texts — this gets built into the setup from the start, not added later.' },
          { label: 'Carrier Registration', status: 'pending', detail: 'Business texting numbers need to be registered with carriers, or a large share of messages can get silently blocked before they reach anyone.' },
        ],
      },
    ],
  },
  {
    id: 'aeo',
    title: 'AI Lead-Gen Project — Proposed, For Your Review',
    tagline: 'The AI-answer-engine system we discussed, based on the real example Joey Greene showed you, scoped into an actual plan',
    icon: 'sparkles',
    lanes: [
      {
        name: 'What This Actually Is',
        summary: 'The short version, no jargon',
        items: [
          { label: 'The idea', detail: 'People are increasingly asking AI tools like ChatGPT questions instead of searching Google — 68% of insurance shoppers now ask an AI assistant about coverage options before ever contacting an agent. This project builds your website into a source those AI tools actually cite and recommend when someone asks an insurance question in your area — the same mechanism behind Joey Greene\'s real results.' },
          { label: 'Why it works', detail: 'AI tools favor sources that are fresh, clearly structured, and back up the business\'s credentials (license numbers, years in business, etc.) in a machine-readable way. Once that foundation is in place, an AI system keeps producing new, genuinely useful content over time — real answers to real questions people search for.' },
          { label: 'Real numbers, not a guess', detail: 'A real insurance site measured a 3.76% conversion rate on visitors referred by AI tools, versus 1.19% from regular organic search — roughly 3x higher. Separately, industry-wide data puts AI-referred visitors converting at 2–4x the rate of traditional search traffic. This isn\'t a hypothetical channel, it\'s already outperforming for agencies using it.' },
          { label: 'Not a redesign', detail: 'This adds to your existing website, it doesn\'t replace it. No rebuild required.' },
          { label: 'Video counts more than you\'d think', detail: 'A 2026 analysis found YouTube mentions are the single strongest predictor of AI-engine visibility, stronger than backlinks or domain authority. This directly connects to the video content setup already on your roadmap (Marketing Content Support / HeyGen below) — that\'s not a separate marketing project, it\'s part of the same visibility play as this one.' },
          { label: 'Your own carrier already agrees', detail: 'Nationwide publishes real guidance to its own agents on exactly this — two separate posts, one on voice/visual search, one on SEO/GEO/AEO benefits generally. Not a marketing vendor\'s pitch, this is carrier-level advice telling agents this channel matters.' },
          { label: 'The real stakes', detail: 'One documented case found a firm wasn\'t being cited at all for its own core service query, while competitors were being cited roughly 73% of the time for the same query. Someone in your market is already winning this, or no one is yet, either way it\'s worth knowing which.' },
          { label: 'Not a novel idea', detail: 'Real, dedicated agencies already exist purely to do AEO for insurance agents specifically (ClickGiant, UltraScout AI, i-call, Bluelinks). This is a proven, already-served market, not an experimental pitch being tried on you first.' },
        ],
      },
      {
        name: 'Does This Actually Work With Momentum?',
        summary: 'A fair question — yes, confirmed',
        items: [
          { label: 'Real, current precedent', status: 'draft', detail: 'This isn\'t just a GoHighLevel trick adapted on faith. Momentum AMS (and NowCerts, the platform it\'s built on) both have real, published AI-agent connections available — including a dedicated integration built specifically for Momentum. This system talking to Momentum the same way it talks to your website is a proven pattern, not an experiment.' },
          { label: 'Already working today', status: 'live', detail: 'This project already has a real, working connection into your Momentum account — it\'s the same one behind every automation already built and shown on this dashboard. The lead-gen system would use that same proven connection, not a new one.' },
        ],
      },
      {
        name: 'Tools & Accounts Needed',
        summary: 'The actual named tools, what each one does, and what it costs',
        items: [
          { label: 'Hermes — the AI agent itself', status: 'pending', detail: 'The same AI agent software Joey Greene uses. It\'s what actually researches questions, writes the content, and keeps it fresh over time. No cost for the software itself.' },
          { label: 'Hostinger — hosting (~$10–$20/mo)', status: 'pending', detail: 'Runs Hermes 24/7 so it keeps working even when no one\'s at a computer. Already on your original infrastructure list from June — not a new ask.' },
          { label: 'Nous Portal or OpenRouter — the AI "brain" behind Hermes', status: 'pending', detail: 'Nous Portal is free; OpenRouter is a small pay-as-you-go option. This is the actual model doing the thinking/writing — your call which one once we\'re ready to set it up.' },
          { label: 'Google account — for lead capture', status: 'pending', detail: 'Free — a simple spreadsheet that logs new leads before they land in Momentum.' },
          { label: 'Access to your website', status: 'pending', detail: 'So Hermes can add content directly to what you already have.' },
          { label: 'Already in place — no action needed', detail: 'Momentum AMS (already connected), and free tools for tracking results: Google Search Console + Bing\'s AI visibility panel.' },
        ],
      },
      {
        name: 'Proposed Phases',
        summary: 'A phased rollout, not a single big launch',
        items: [
          { label: 'Phase 1 — Foundation (Weeks 1–6)', status: 'pending', detail: 'Add your credentials (license numbers, years established, etc.) to your site in a format AI tools can actually read. Confirm site speed and mobile setup. Get the content system running and tested before it does anything client-facing.' },
          { label: 'Phase 2 — Content Production (Weeks 6–18, ongoing after)', status: 'pending', detail: 'The system starts publishing real, useful answers to real questions people ask — the kind of content Joey\'s system produced, direct and specific to your lines of business. Every page leads with a direct answer in the first couple sentences, written in natural language (your city, your carriers, your product types), and no thin or duplicate pages, ever — the same rule that made Joey\'s version work.' },
          { label: 'Phase 3/4 — Authority + Ongoing Monitoring', status: 'pending', detail: 'Not a one-time launch — content stays fresh and we track real results (which AI tools are citing you, and whether it\'s turning into real leads) on an ongoing basis.' },
        ],
      },
      {
        name: 'Honest Timeline — Set Right From the Start',
        summary: 'This is a patience-required system, same as Joey\'s own experience',
        items: [
          { label: 'First results', detail: 'Typically month 3–4 for the first AI citations — not immediate.' },
          { label: 'Meaningful visibility', detail: 'Typically month 6–9.' },
          { label: 'Stable, compounding presence', detail: 'Typically month 9–12, with results continuing to build from there rather than plateauing.' },
        ],
      },
    ],
  },
]
