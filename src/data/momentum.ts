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
  icon: 'workflow' | 'database' | 'zap' | 'shield-check' | 'list-checks' | 'map' | 'message-square'
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
        summary: '9 touchpoints total, 5 of 9 built as automations, 1 content-ready as a manual send — no texting required',
        items: [
          { label: 'Birthday message', status: 'draft', detail: 'Built and ready to activate — see the Automations section above for full detail.' },
          { label: 'Claims Follow-Up message', status: 'draft', detail: 'Built for your 3 most common claim types (Automobile Loss, Property Loss, General Liability) — see the Automations section above for full detail.' },
          { label: 'Quarterly check-in', status: 'draft', detail: 'Two check-ins built for now (90 and 270 days into the policy year) — see the Automations section above for full detail.' },
          { label: 'Referral opportunity', status: 'draft', detail: 'Built and ready to activate — see the Automations section above for full detail.' },
          { label: 'Policy change tracking', status: 'draft', detail: 'Built for your 3 most common request types (General, General New, Policy Change Request - Other) — see the Automations section above for full detail.' },
          { label: 'Seasonal safety email', status: 'draft', detail: 'Content is written and ready (winter freeze prep, per your confirmation), but Momentum has no way to trigger a message on a shared calendar date across your whole client list — every trigger is tied to an individual record’s own date, not a fixed date. This one will need to go out as a yearly manual bulk send instead of an automation.' },
          { label: 'Remaining 3 touchpoints', status: 'pending', detail: 'Life-event check-in, cross-sell opportunity, and annual coverage review — not yet built.' },
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
          { label: 'Claims Pipeline Automation', status: 'pending', detail: 'Automating the 7-stage claims process.' },
          { label: 'Referral Partner Pipeline — Needs Your Review', status: 'pending', detail: 'Worth flagging directly: you told us this is one of your highest priorities, but your written plan places it here, in the long-term phase. We followed the written plan for this draft, but wanted to check with you directly — should this move up into an earlier phase, or has the priority shifted since you wrote that? Let us know either way.' },
          { label: 'Marketing & Commercial Risk Management Pipelines', status: 'pending', detail: 'The remaining two pipelines from your long-term vision.' },
          { label: 'Marketing Content Support', status: 'pending', detail: 'Getting your marketing assistant fully set up to create branded video content at scale.' },
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
]
