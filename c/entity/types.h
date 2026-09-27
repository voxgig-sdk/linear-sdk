// Typed models for the Linear SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types are mapped
// from the canonical type sentinels. Do not edit by hand.
//
// These are DOCUMENTARY: the SDK runtime is dynamic (ops take/return
// `voxgig_value*`), so nothing consumes these structs yet — they mirror the
// entity/op shapes for reference and IDE support. This header is standalone
// and is not #included by any generated .c.

#ifndef LINEAR_ENTITY_TYPES_H
#define LINEAR_ENTITY_TYPES_H

#include "sdk.h"

// AccessKeyRelease is the typed data model for the access_key_release entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*commitsha;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  char*id;
  char*name;
  char*url;
  char*version;  // optional
} AccessKeyRelease;

// AccessKeyReleaseLoadMatch is the typed request payload for AccessKeyRelease.load.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*commitsha;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;  // optional
  char*id;
  char*name;  // optional
  char*url;  // optional
  char*version;  // optional
} AccessKeyReleaseLoadMatch;

// AccessKeyReleaseListMatch is the typed request payload for AccessKeyRelease.list.
typedef struct {
  int64_t limit;  // optional
} AccessKeyReleaseListMatch;

// AccessKeyReleaseCreateData is the typed request payload for AccessKeyRelease.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*commitsha;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  char*id;
  char*name;
  char*url;
  char*version;  // optional
} AccessKeyReleaseCreateData;

// AccessKeyReleasePipeline is the typed data model for the access_key_release_pipeline entity.
typedef struct {
  char*id;
  char*includepathpatterns;
} AccessKeyReleasePipeline;

// AccessKeyReleasePipelineLoadMatch is the typed request payload for AccessKeyReleasePipeline.load.
typedef struct {
  char*id;
  char*includepathpatterns;  // optional
} AccessKeyReleasePipelineLoadMatch;

// AgentActivity is the typed data model for the agent_activity entity.
typedef struct {
  voxgig_value*agentsession;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*contextualmetadata;  // optional
  voxgig_value*createdat;
  bool ephemeral;
  char*executionskippedreason;  // optional
  char*id;
  bool queued;
  voxgig_value*sentat;  // optional
  char*signal;  // optional
  voxgig_value*signalmetadata;  // optional
  voxgig_value*sourcecomment;  // optional
  voxgig_value*sourcemetadata;  // optional
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} AgentActivity;

// AgentActivityLoadMatch is the typed request payload for AgentActivity.load.
typedef struct {
  char*id;
} AgentActivityLoadMatch;

// AgentActivityListMatch is the typed request payload for AgentActivity.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} AgentActivityListMatch;

// AgentActivityCreateData is the typed request payload for AgentActivity.create.
typedef struct {
  voxgig_value*agentsession;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*contextualmetadata;  // optional
  voxgig_value*createdat;
  bool ephemeral;
  char*executionskippedreason;  // optional
  char*id;
  bool queued;
  voxgig_value*sentat;  // optional
  char*signal;  // optional
  voxgig_value*signalmetadata;  // optional
  voxgig_value*sourcecomment;  // optional
  voxgig_value*sourcemetadata;  // optional
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} AgentActivityCreateData;

// AgentActivityUpdateData is the typed request payload for AgentActivity.update.
typedef struct {
  char*id;
  voxgig_value*agentsession;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*contextualmetadata;  // optional
  voxgig_value*createdat;  // optional
  bool ephemeral;  // optional
  char*executionskippedreason;  // optional
  bool queued;  // optional
  voxgig_value*sentat;  // optional
  char*signal;  // optional
  voxgig_value*signalmetadata;  // optional
  voxgig_value*sourcecomment;  // optional
  voxgig_value*sourcemetadata;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*user;  // optional
} AgentActivityUpdateData;

// AgentSession is the typed data model for the agent_session entity.
typedef struct {
  voxgig_value*appuser;  // optional
  voxgig_value*archivedat;  // optional
  char*codingharnessmodellabel;  // optional
  voxgig_value*comment;  // optional
  voxgig_value*context;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*dismissedat;  // optional
  voxgig_value*dismissedby;  // optional
  voxgig_value*endedat;  // optional
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*modelselection;  // optional
  voxgig_value*plan;  // optional
  voxgig_value*pullrequest;  // optional
  char*slugid;
  voxgig_value*sourcecomment;  // optional
  voxgig_value*sourcemetadata;  // optional
  voxgig_value*startedat;  // optional
  char*status;
  char*summary;  // optional
  voxgig_value*updatedat;
  char*url;  // optional
} AgentSession;

// AgentSessionLoadMatch is the typed request payload for AgentSession.load.
typedef struct {
  char*id;
} AgentSessionLoadMatch;

// AgentSessionListMatch is the typed request payload for AgentSession.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} AgentSessionListMatch;

// AgentSessionCreateData is the typed request payload for AgentSession.create.
typedef struct {
  char*pull_request_id;  // optional
  voxgig_value*appuser;  // optional
  voxgig_value*archivedat;  // optional
  char*codingharnessmodellabel;  // optional
  voxgig_value*comment;  // optional
  voxgig_value*context;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*dismissedat;  // optional
  voxgig_value*dismissedby;  // optional
  voxgig_value*endedat;  // optional
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*modelselection;  // optional
  voxgig_value*plan;  // optional
  voxgig_value*pullrequest;  // optional
  char*slugid;
  voxgig_value*sourcecomment;  // optional
  voxgig_value*sourcemetadata;  // optional
  voxgig_value*startedat;  // optional
  char*status;
  char*summary;  // optional
  voxgig_value*updatedat;
  char*url;  // optional
} AgentSessionCreateData;

// AgentSessionUpdateData is the typed request payload for AgentSession.update.
typedef struct {
  char*id;
  voxgig_value*appuser;  // optional
  voxgig_value*archivedat;  // optional
  char*codingharnessmodellabel;  // optional
  voxgig_value*comment;  // optional
  voxgig_value*context;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*dismissedat;  // optional
  voxgig_value*dismissedby;  // optional
  voxgig_value*endedat;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*modelselection;  // optional
  voxgig_value*plan;  // optional
  voxgig_value*pullrequest;  // optional
  char*slugid;  // optional
  voxgig_value*sourcecomment;  // optional
  voxgig_value*sourcemetadata;  // optional
  voxgig_value*startedat;  // optional
  char*status;  // optional
  char*summary;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} AgentSessionUpdateData;

// AgentSkill is the typed data model for the agent_skill entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*body;
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*icon;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  voxgig_value*lastupdatedby;  // optional
  voxgig_value*lastusedat;  // optional
  voxgig_value*owner;  // optional
  double recentusagecount;
  bool shared;
  char*slugid;
  char*teamid;  // optional
  char*title;
  voxgig_value*updatedat;
} AgentSkill;

// AgentSkillLoadMatch is the typed request payload for AgentSkill.load.
typedef struct {
  char*id;
} AgentSkillLoadMatch;

// AgentSkillListMatch is the typed request payload for AgentSkill.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} AgentSkillListMatch;

// AgentSkillCreateData is the typed request payload for AgentSkill.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*body;
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*icon;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  voxgig_value*lastupdatedby;  // optional
  voxgig_value*lastusedat;  // optional
  voxgig_value*owner;  // optional
  double recentusagecount;
  bool shared;
  char*slugid;
  char*teamid;  // optional
  char*title;
  voxgig_value*updatedat;
} AgentSkillCreateData;

// AgentSkillUpdateData is the typed request payload for AgentSkill.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*body;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*icon;  // optional
  voxgig_value*inheritedfrom;  // optional
  voxgig_value*lastupdatedby;  // optional
  voxgig_value*lastusedat;  // optional
  voxgig_value*owner;  // optional
  double recentusagecount;  // optional
  bool shared;  // optional
  char*slugid;  // optional
  char*teamid;  // optional
  char*title;  // optional
  voxgig_value*updatedat;  // optional
} AgentSkillUpdateData;

// AgentSkillRemoveMatch is the typed request payload for AgentSkill.remove.
typedef struct {
  char*id;
} AgentSkillRemoveMatch;

// Application is the typed data model for the application entity.
typedef struct {
  char*clientid;
  char*description;  // optional
  char*developer;
  char*developerurl;
  char*id;
  char*imageurl;  // optional
  char*name;
} Application;

// ApplicationLoadMatch is the typed request payload for Application.load.
typedef struct {
  char*client_id;
} ApplicationLoadMatch;

// Attachment is the typed data model for the attachment entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*bodydata;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*externalusercreator;  // optional
  bool groupbysource;
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*metadata;
  voxgig_value*originalissue;  // optional
  voxgig_value*source;  // optional
  char*sourcetype;  // optional
  char*subtitle;  // optional
  char*title;
  voxgig_value*updatedat;
  char*url;
} Attachment;

// AttachmentLoadMatch is the typed request payload for Attachment.load.
typedef struct {
  char*id;
} AttachmentLoadMatch;

// AttachmentListMatch is the typed request payload for Attachment.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
  char*url;  // optional
} AttachmentListMatch;

// AttachmentCreateData is the typed request payload for Attachment.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*bodydata;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*externalusercreator;  // optional
  bool groupbysource;
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*metadata;
  voxgig_value*originalissue;  // optional
  voxgig_value*source;  // optional
  char*sourcetype;  // optional
  char*subtitle;  // optional
  char*title;
  voxgig_value*updatedat;
  char*url;
} AttachmentCreateData;

// AttachmentUpdateData is the typed request payload for Attachment.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*bodydata;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*externalusercreator;  // optional
  bool groupbysource;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*metadata;  // optional
  voxgig_value*originalissue;  // optional
  voxgig_value*source;  // optional
  char*sourcetype;  // optional
  char*subtitle;  // optional
  char*title;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} AttachmentUpdateData;

// AttachmentRemoveMatch is the typed request payload for Attachment.remove.
typedef struct {
  char*id;
} AttachmentRemoveMatch;

// AuditEntry is the typed data model for the audit_entry entity.
typedef struct {
  voxgig_value*actor;  // optional
  char*actorid;  // optional
  voxgig_value*archivedat;  // optional
  char*countrycode;  // optional
  voxgig_value*createdat;
  char*id;
  char*ip;  // optional
  voxgig_value*metadata;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*requestinformation;  // optional
  char*type;
  voxgig_value*updatedat;
} AuditEntry;

// AuditEntryListMatch is the typed request payload for AuditEntry.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} AuditEntryListMatch;

// AuditEntryType is the typed data model for the audit_entry_type entity.
typedef struct {
  char*description;
  char*type;
} AuditEntryType;

// AuditEntryTypeListMatch is the typed request payload for AuditEntryType.list.
typedef struct {
  char*description;  // optional
  char*type;  // optional
} AuditEntryTypeListMatch;

// AuthResolverResponse is the typed data model for the auth_resolver_response entity.
typedef struct {
  bool allowdomainaccess;  // optional
  char*email;
  char*id;
  char*lastusedorganizationid;  // optional
  char*service;  // optional
} AuthResolverResponse;

// AuthResolverResponseLoadMatch is the typed request payload for AuthResolverResponse.load.
typedef struct {
  bool allowdomainaccess;  // optional
  char*email;  // optional
  char*id;
  char*lastusedorganizationid;  // optional
  char*service;  // optional
} AuthResolverResponseLoadMatch;

// AuthResolverResponseCreateData is the typed request payload for AuthResolverResponse.create.
typedef struct {
  bool allowdomainaccess;  // optional
  char*email;
  char*id;
  char*lastusedorganizationid;  // optional
  char*service;  // optional
} AuthResolverResponseCreateData;

// AuthResolverResponseUpdateData is the typed request payload for AuthResolverResponse.update.
typedef struct {
  char*auth_id;
  voxgig_value*response;
  bool allowdomainaccess;  // optional
  char*email;  // optional
  char*id;  // optional
  char*lastusedorganizationid;  // optional
  char*service;  // optional
} AuthResolverResponseUpdateData;

// AuthenticationSessionResponse is the typed data model for the authentication_session_response entity.
typedef struct {
  char*browsertype;  // optional
  char*client;  // optional
  char*countrycodes;
  voxgig_value*createdat;
  char*detailedname;
  char*id;
  char*ip;  // optional
  bool iscurrentsession;
  voxgig_value*lastactiveat;  // optional
  char*location;  // optional
  char*locationcity;  // optional
  char*locationcountry;  // optional
  char*locationcountrycode;  // optional
  char*locationregioncode;  // optional
  char*name;
  char*operatingsystem;  // optional
  char*service;  // optional
  char*type;
  voxgig_value*updatedat;
  char*useragent;  // optional
} AuthenticationSessionResponse;

// AuthenticationSessionResponseListMatch is the typed request payload for AuthenticationSessionResponse.list.
typedef struct {
  char*id;  // optional
} AuthenticationSessionResponseListMatch;

// Comment is the typed data model for the comment entity.
typedef struct {
  voxgig_value*agentsession;  // optional
  voxgig_value*archivedat;  // optional
  char*body;
  char*bodydata;
  voxgig_value*botactor;  // optional
  voxgig_value*createdat;
  voxgig_value*documentcontent;  // optional
  char*documentcontentid;  // optional
  voxgig_value*editedat;  // optional
  voxgig_value*externalthread;  // optional
  voxgig_value*externaluser;  // optional
  bool hideinlinear;
  char*id;
  voxgig_value*initiative;  // optional
  char*initiativeid;  // optional
  voxgig_value*initiativeupdate;  // optional
  char*initiativeupdateid;  // optional
  bool isartificialagentsessionroot;
  voxgig_value*issue;  // optional
  char*issueid;  // optional
  voxgig_value*onbehalfof;  // optional
  voxgig_value*parent;  // optional
  char*parentid;  // optional
  voxgig_value*post;  // optional
  voxgig_value*project;  // optional
  char*projectid;  // optional
  voxgig_value*projectupdate;  // optional
  char*projectupdateid;  // optional
  char*quotedtext;  // optional
  voxgig_value*reactiondata;
  voxgig_value*resolvedat;  // optional
  voxgig_value*resolvingcomment;  // optional
  char*resolvingcommentid;  // optional
  voxgig_value*resolvinguser;  // optional
  voxgig_value*threadsummary;  // optional
  voxgig_value*updatedat;
  char*url;
  voxgig_value*user;  // optional
} Comment;

// CommentLoadMatch is the typed request payload for Comment.load.
typedef struct {
  char*hash;  // optional
  char*id;  // optional
} CommentLoadMatch;

// CommentListMatch is the typed request payload for Comment.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} CommentListMatch;

// CommentCreateData is the typed request payload for Comment.create.
typedef struct {
  voxgig_value*agentsession;  // optional
  voxgig_value*archivedat;  // optional
  char*body;
  char*bodydata;
  voxgig_value*botactor;  // optional
  voxgig_value*createdat;
  voxgig_value*documentcontent;  // optional
  char*documentcontentid;  // optional
  voxgig_value*editedat;  // optional
  voxgig_value*externalthread;  // optional
  voxgig_value*externaluser;  // optional
  bool hideinlinear;
  char*id;
  voxgig_value*initiative;  // optional
  char*initiativeid;  // optional
  voxgig_value*initiativeupdate;  // optional
  char*initiativeupdateid;  // optional
  bool isartificialagentsessionroot;
  voxgig_value*issue;  // optional
  char*issueid;  // optional
  voxgig_value*onbehalfof;  // optional
  voxgig_value*parent;  // optional
  char*parentid;  // optional
  voxgig_value*post;  // optional
  voxgig_value*project;  // optional
  char*projectid;  // optional
  voxgig_value*projectupdate;  // optional
  char*projectupdateid;  // optional
  char*quotedtext;  // optional
  voxgig_value*reactiondata;
  voxgig_value*resolvedat;  // optional
  voxgig_value*resolvingcomment;  // optional
  char*resolvingcommentid;  // optional
  voxgig_value*resolvinguser;  // optional
  voxgig_value*threadsummary;  // optional
  voxgig_value*updatedat;
  char*url;
  voxgig_value*user;  // optional
} CommentCreateData;

// CommentUpdateData is the typed request payload for Comment.update.
typedef struct {
  char*id;
  bool skip_edited_at;  // optional
  voxgig_value*agentsession;  // optional
  voxgig_value*archivedat;  // optional
  char*body;  // optional
  char*bodydata;  // optional
  voxgig_value*botactor;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*documentcontent;  // optional
  char*documentcontentid;  // optional
  voxgig_value*editedat;  // optional
  voxgig_value*externalthread;  // optional
  voxgig_value*externaluser;  // optional
  bool hideinlinear;  // optional
  voxgig_value*initiative;  // optional
  char*initiativeid;  // optional
  voxgig_value*initiativeupdate;  // optional
  char*initiativeupdateid;  // optional
  bool isartificialagentsessionroot;  // optional
  voxgig_value*issue;  // optional
  char*issueid;  // optional
  voxgig_value*onbehalfof;  // optional
  voxgig_value*parent;  // optional
  char*parentid;  // optional
  voxgig_value*post;  // optional
  voxgig_value*project;  // optional
  char*projectid;  // optional
  voxgig_value*projectupdate;  // optional
  char*projectupdateid;  // optional
  char*quotedtext;  // optional
  voxgig_value*reactiondata;  // optional
  voxgig_value*resolvedat;  // optional
  voxgig_value*resolvingcomment;  // optional
  char*resolvingcommentid;  // optional
  voxgig_value*resolvinguser;  // optional
  voxgig_value*threadsummary;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
  voxgig_value*user;  // optional
} CommentUpdateData;

// CommentRemoveMatch is the typed request payload for Comment.remove.
typedef struct {
  char*id;
} CommentRemoveMatch;

// CreateOrJoinOrganizationResponse is the typed data model for the create_or_join_organization_response entity.
typedef struct {
  voxgig_value*organization;  // optional
  voxgig_value*user;  // optional
} CreateOrJoinOrganizationResponse;

// CreateOrJoinOrganizationResponseCreateData is the typed request payload for CreateOrJoinOrganizationResponse.create.
typedef struct {
  char*partner_offer_token;  // optional
  char*session_id;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*user;  // optional
} CreateOrJoinOrganizationResponseCreateData;

// CreateOrJoinOrganizationResponseUpdateData is the typed request payload for CreateOrJoinOrganizationResponse.update.
typedef struct {
  char*organization_id;
  voxgig_value*organization;  // optional
  voxgig_value*user;  // optional
} CreateOrJoinOrganizationResponseUpdateData;

// CustomView is the typed data model for the custom_view entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*facet;  // optional
  voxgig_value*feeditemfilterdata;  // optional
  voxgig_value*filterdata;
  char*icon;  // optional
  char*id;
  voxgig_value*initiativefilterdata;  // optional
  char*modelname;
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*organizationviewpreferences;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*projectfilterdata;  // optional
  bool shared;
  char*slugid;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
  voxgig_value*updatedby;  // optional
  voxgig_value*userviewpreferences;  // optional
} CustomView;

// CustomViewLoadMatch is the typed request payload for CustomView.load.
typedef struct {
  char*id;
} CustomViewLoadMatch;

// CustomViewListMatch is the typed request payload for CustomView.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} CustomViewListMatch;

// CustomViewCreateData is the typed request payload for CustomView.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*facet;  // optional
  voxgig_value*feeditemfilterdata;  // optional
  voxgig_value*filterdata;
  char*icon;  // optional
  char*id;
  voxgig_value*initiativefilterdata;  // optional
  char*modelname;
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*organizationviewpreferences;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*projectfilterdata;  // optional
  bool shared;
  char*slugid;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
  voxgig_value*updatedby;  // optional
  voxgig_value*userviewpreferences;  // optional
} CustomViewCreateData;

// CustomViewUpdateData is the typed request payload for CustomView.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*facet;  // optional
  voxgig_value*feeditemfilterdata;  // optional
  voxgig_value*filterdata;  // optional
  char*icon;  // optional
  voxgig_value*initiativefilterdata;  // optional
  char*modelname;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*organizationviewpreferences;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*projectfilterdata;  // optional
  bool shared;  // optional
  char*slugid;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*updatedby;  // optional
  voxgig_value*userviewpreferences;  // optional
} CustomViewUpdateData;

// CustomViewRemoveMatch is the typed request payload for CustomView.remove.
typedef struct {
  char*id;
} CustomViewRemoveMatch;

// Customer is the typed data model for the customer entity.
typedef struct {
  double approximateneedcount;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*domains;
  char*externalids;
  char*id;
  voxgig_value*integration;  // optional
  char*logourl;  // optional
  char*mainsourceid;  // optional
  char*name;
  voxgig_value*owner;  // optional
  int64_t revenue;  // optional
  double size;  // optional
  char*slackchannelid;  // optional
  char*slugid;
  voxgig_value*status;  // optional
  voxgig_value*tier;  // optional
  voxgig_value*updatedat;
  char*url;
} Customer;

// CustomerLoadMatch is the typed request payload for Customer.load.
typedef struct {
  char*id;
} CustomerLoadMatch;

// CustomerListMatch is the typed request payload for Customer.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} CustomerListMatch;

// CustomerCreateData is the typed request payload for Customer.create.
typedef struct {
  double approximateneedcount;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*domains;
  char*externalids;
  char*id;
  voxgig_value*integration;  // optional
  char*logourl;  // optional
  char*mainsourceid;  // optional
  char*name;
  voxgig_value*owner;  // optional
  int64_t revenue;  // optional
  double size;  // optional
  char*slackchannelid;  // optional
  char*slugid;
  voxgig_value*status;  // optional
  voxgig_value*tier;  // optional
  voxgig_value*updatedat;
  char*url;
} CustomerCreateData;

// CustomerUpdateData is the typed request payload for Customer.update.
typedef struct {
  char*id;
  double approximateneedcount;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  char*domains;  // optional
  char*externalids;  // optional
  voxgig_value*integration;  // optional
  char*logourl;  // optional
  char*mainsourceid;  // optional
  char*name;  // optional
  voxgig_value*owner;  // optional
  int64_t revenue;  // optional
  double size;  // optional
  char*slackchannelid;  // optional
  char*slugid;  // optional
  voxgig_value*status;  // optional
  voxgig_value*tier;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} CustomerUpdateData;

// CustomerRemoveMatch is the typed request payload for Customer.remove.
typedef struct {
  char*id;
} CustomerRemoveMatch;

// CustomerNeed is the typed data model for the customer_need entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*attachment;  // optional
  char*body;  // optional
  char*bodydata;  // optional
  voxgig_value*comment;  // optional
  char*content;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*customer;  // optional
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*originalissue;  // optional
  double priority;
  voxgig_value*project;  // optional
  voxgig_value*projectattachment;  // optional
  voxgig_value*updatedat;
  char*url;  // optional
} CustomerNeed;

// CustomerNeedLoadMatch is the typed request payload for CustomerNeed.load.
typedef struct {
  char*hash;  // optional
  char*id;  // optional
} CustomerNeedLoadMatch;

// CustomerNeedListMatch is the typed request payload for CustomerNeed.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} CustomerNeedListMatch;

// CustomerNeedCreateData is the typed request payload for CustomerNeed.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*attachment;  // optional
  char*body;  // optional
  char*bodydata;  // optional
  voxgig_value*comment;  // optional
  char*content;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*customer;  // optional
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*originalissue;  // optional
  double priority;
  voxgig_value*project;  // optional
  voxgig_value*projectattachment;  // optional
  voxgig_value*updatedat;
  char*url;  // optional
} CustomerNeedCreateData;

// CustomerNeedUpdateData is the typed request payload for CustomerNeed.update.
typedef struct {
  bool clear_attachment;  // optional
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*attachment;  // optional
  char*body;  // optional
  char*bodydata;  // optional
  voxgig_value*comment;  // optional
  char*content;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*customer;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*originalissue;  // optional
  double priority;  // optional
  voxgig_value*project;  // optional
  voxgig_value*projectattachment;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} CustomerNeedUpdateData;

// CustomerNeedRemoveMatch is the typed request payload for CustomerNeed.remove.
typedef struct {
  char*id;
  bool keep_attachment;  // optional
} CustomerNeedRemoveMatch;

// CustomerStatus is the typed data model for the customer_status entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*displayname;
  char*id;
  char*name;
  double position;
  voxgig_value*updatedat;
} CustomerStatus;

// CustomerStatusLoadMatch is the typed request payload for CustomerStatus.load.
typedef struct {
  char*id;
} CustomerStatusLoadMatch;

// CustomerStatusListMatch is the typed request payload for CustomerStatus.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} CustomerStatusListMatch;

// CustomerStatusCreateData is the typed request payload for CustomerStatus.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*displayname;
  char*id;
  char*name;
  double position;
  voxgig_value*updatedat;
} CustomerStatusCreateData;

// CustomerStatusUpdateData is the typed request payload for CustomerStatus.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  char*description;  // optional
  char*displayname;  // optional
  char*name;  // optional
  double position;  // optional
  voxgig_value*updatedat;  // optional
} CustomerStatusUpdateData;

// CustomerStatusRemoveMatch is the typed request payload for CustomerStatus.remove.
typedef struct {
  char*id;
} CustomerStatusRemoveMatch;

// CustomerTier is the typed data model for the customer_tier entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*displayname;
  char*id;
  char*name;
  double position;
  voxgig_value*updatedat;
} CustomerTier;

// CustomerTierLoadMatch is the typed request payload for CustomerTier.load.
typedef struct {
  char*id;
} CustomerTierLoadMatch;

// CustomerTierListMatch is the typed request payload for CustomerTier.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} CustomerTierListMatch;

// CustomerTierCreateData is the typed request payload for CustomerTier.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*displayname;
  char*id;
  char*name;
  double position;
  voxgig_value*updatedat;
} CustomerTierCreateData;

// CustomerTierUpdateData is the typed request payload for CustomerTier.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  char*description;  // optional
  char*displayname;  // optional
  char*name;  // optional
  double position;  // optional
  voxgig_value*updatedat;  // optional
} CustomerTierUpdateData;

// CustomerTierRemoveMatch is the typed request payload for CustomerTier.remove.
typedef struct {
  char*id;
} CustomerTierRemoveMatch;

// Cycle is the typed data model for the cycle entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*completedat;  // optional
  double completedissuecounthistory;
  double completedscopehistory;
  voxgig_value*createdat;
  voxgig_value*currentprogress;
  char*description;  // optional
  voxgig_value*endsat;
  char*id;
  double inprogressscopehistory;
  voxgig_value*inheritedfrom;  // optional
  bool isactive;
  bool isfuture;
  bool isnext;
  bool ispast;
  bool isprevious;
  double issuecounthistory;
  char*name;  // optional
  double number;
  double progress;
  voxgig_value*progresshistory;
  double scopehistory;
  voxgig_value*startsat;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} Cycle;

// CycleLoadMatch is the typed request payload for Cycle.load.
typedef struct {
  char*id;
} CycleLoadMatch;

// CycleListMatch is the typed request payload for Cycle.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} CycleListMatch;

// CycleCreateData is the typed request payload for Cycle.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*completedat;  // optional
  double completedissuecounthistory;
  double completedscopehistory;
  voxgig_value*createdat;
  voxgig_value*currentprogress;
  char*description;  // optional
  voxgig_value*endsat;
  char*id;
  double inprogressscopehistory;
  voxgig_value*inheritedfrom;  // optional
  bool isactive;
  bool isfuture;
  bool isnext;
  bool ispast;
  bool isprevious;
  double issuecounthistory;
  char*name;  // optional
  double number;
  double progress;
  voxgig_value*progresshistory;
  double scopehistory;
  voxgig_value*startsat;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} CycleCreateData;

// CycleUpdateData is the typed request payload for Cycle.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*completedat;  // optional
  double completedissuecounthistory;  // optional
  double completedscopehistory;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*currentprogress;  // optional
  char*description;  // optional
  voxgig_value*endsat;  // optional
  double inprogressscopehistory;  // optional
  voxgig_value*inheritedfrom;  // optional
  bool isactive;  // optional
  bool isfuture;  // optional
  bool isnext;  // optional
  bool ispast;  // optional
  bool isprevious;  // optional
  double issuecounthistory;  // optional
  char*name;  // optional
  double number;  // optional
  double progress;  // optional
  voxgig_value*progresshistory;  // optional
  double scopehistory;  // optional
  voxgig_value*startsat;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
} CycleUpdateData;

// Diff is the typed data model for the diff entity.
typedef struct {
  double additions;
  voxgig_value*agentsession;  // optional
  voxgig_value*archivedat;  // optional
  char*contenthash;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  double deletions;
  double filecount;
  char*id;
  voxgig_value*organization;  // optional
  voxgig_value*pullrequest;  // optional
  char*slugid;
  bool truncated;
  voxgig_value*updatedat;
} Diff;

// DiffLoadMatch is the typed request payload for Diff.load.
typedef struct {
  char*id;
} DiffLoadMatch;

// Document is the typed data model for the document entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*cycle;  // optional
  char*documentcontentid;  // optional
  voxgig_value*hiddenat;  // optional
  char*icon;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*project;  // optional
  voxgig_value*release;  // optional
  char*slugid;
  double sortorder;
  char*summary;  // optional
  voxgig_value*team;  // optional
  char*title;
  bool trashed;  // optional
  voxgig_value*updatedat;
  voxgig_value*updatedby;  // optional
  char*url;
} Document;

// DocumentLoadMatch is the typed request payload for Document.load.
typedef struct {
  char*id;
} DocumentLoadMatch;

// DocumentListMatch is the typed request payload for Document.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} DocumentListMatch;

// DocumentCreateData is the typed request payload for Document.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*cycle;  // optional
  char*documentcontentid;  // optional
  voxgig_value*hiddenat;  // optional
  char*icon;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*project;  // optional
  voxgig_value*release;  // optional
  char*slugid;
  double sortorder;
  char*summary;  // optional
  voxgig_value*team;  // optional
  char*title;
  bool trashed;  // optional
  voxgig_value*updatedat;
  voxgig_value*updatedby;  // optional
  char*url;
} DocumentCreateData;

// DocumentUpdateData is the typed request payload for Document.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*cycle;  // optional
  char*documentcontentid;  // optional
  voxgig_value*hiddenat;  // optional
  char*icon;  // optional
  voxgig_value*initiative;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*project;  // optional
  voxgig_value*release;  // optional
  char*slugid;  // optional
  double sortorder;  // optional
  char*summary;  // optional
  voxgig_value*team;  // optional
  char*title;  // optional
  bool trashed;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*updatedby;  // optional
  char*url;  // optional
} DocumentUpdateData;

// DocumentRemoveMatch is the typed request payload for Document.remove.
typedef struct {
  char*id;
} DocumentRemoveMatch;

// DocumentSearchResult is the typed data model for the document_search_result entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*cycle;  // optional
  char*documentcontentid;  // optional
  voxgig_value*hiddenat;  // optional
  char*icon;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*metadata;
  voxgig_value*owner;  // optional
  voxgig_value*project;  // optional
  voxgig_value*release;  // optional
  char*slugid;
  double sortorder;
  char*summary;  // optional
  voxgig_value*team;  // optional
  char*title;
  bool trashed;  // optional
  voxgig_value*updatedat;
  voxgig_value*updatedby;  // optional
  char*url;
} DocumentSearchResult;

// DocumentSearchResultListMatch is the typed request payload for DocumentSearchResult.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  bool include_comment;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
  char*team_id;  // optional
  char*term;
} DocumentSearchResultListMatch;

// EmailIntakeAddress is the typed data model for the email_intake_address entity.
typedef struct {
  char*address;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  bool customerrequestsenabled;
  bool enabled;
  char*forwardingemailaddress;  // optional
  char*id;
  char*issuecanceledautoreply;  // optional
  bool issuecanceledautoreplyenabled;
  char*issuecompletedautoreply;  // optional
  bool issuecompletedautoreplyenabled;
  char*issuecreatedautoreply;  // optional
  bool issuecreatedautoreplyenabled;
  voxgig_value*lastusedat;  // optional
  voxgig_value*organization;  // optional
  bool reopenonreply;
  bool repliesenabled;
  char*sendername;  // optional
  voxgig_value*sesdomainidentity;  // optional
  voxgig_value*team;  // optional
  voxgig_value*template;  // optional
  char*type;
  voxgig_value*updatedat;
  bool useusernamesinreplies;
} EmailIntakeAddress;

// EmailIntakeAddressLoadMatch is the typed request payload for EmailIntakeAddress.load.
typedef struct {
  char*id;
} EmailIntakeAddressLoadMatch;

// EmailIntakeAddressCreateData is the typed request payload for EmailIntakeAddress.create.
typedef struct {
  char*address;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  bool customerrequestsenabled;
  bool enabled;
  char*forwardingemailaddress;  // optional
  char*id;
  char*issuecanceledautoreply;  // optional
  bool issuecanceledautoreplyenabled;
  char*issuecompletedautoreply;  // optional
  bool issuecompletedautoreplyenabled;
  char*issuecreatedautoreply;  // optional
  bool issuecreatedautoreplyenabled;
  voxgig_value*lastusedat;  // optional
  voxgig_value*organization;  // optional
  bool reopenonreply;
  bool repliesenabled;
  char*sendername;  // optional
  voxgig_value*sesdomainidentity;  // optional
  voxgig_value*team;  // optional
  voxgig_value*template;  // optional
  char*type;
  voxgig_value*updatedat;
  bool useusernamesinreplies;
} EmailIntakeAddressCreateData;

// EmailIntakeAddressUpdateData is the typed request payload for EmailIntakeAddress.update.
typedef struct {
  char*id;
  char*address;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  bool customerrequestsenabled;  // optional
  bool enabled;  // optional
  char*forwardingemailaddress;  // optional
  char*issuecanceledautoreply;  // optional
  bool issuecanceledautoreplyenabled;  // optional
  char*issuecompletedautoreply;  // optional
  bool issuecompletedautoreplyenabled;  // optional
  char*issuecreatedautoreply;  // optional
  bool issuecreatedautoreplyenabled;  // optional
  voxgig_value*lastusedat;  // optional
  voxgig_value*organization;  // optional
  bool reopenonreply;  // optional
  bool repliesenabled;  // optional
  char*sendername;  // optional
  voxgig_value*sesdomainidentity;  // optional
  voxgig_value*team;  // optional
  voxgig_value*template;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
  bool useusernamesinreplies;  // optional
} EmailIntakeAddressUpdateData;

// EmailIntakeAddressRemoveMatch is the typed request payload for EmailIntakeAddress.remove.
typedef struct {
  char*id;
} EmailIntakeAddressRemoveMatch;

// EmailUserAccountAuthChallengeResponse is the typed data model for the email_user_account_auth_challenge_response entity.
typedef struct {
  char*authtype;
  bool success;
} EmailUserAccountAuthChallengeResponse;

// EmailUserAccountAuthChallengeResponseCreateData is the typed request payload for EmailUserAccountAuthChallengeResponse.create.
typedef struct {
  char*authtype;
  bool success;
} EmailUserAccountAuthChallengeResponseCreateData;

// Emoji is the typed data model for the emoji entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*id;
  char*name;
  voxgig_value*organization;  // optional
  char*source;
  voxgig_value*updatedat;
  char*url;
} Emoji;

// EmojiLoadMatch is the typed request payload for Emoji.load.
typedef struct {
  char*id;
} EmojiLoadMatch;

// EmojiListMatch is the typed request payload for Emoji.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} EmojiListMatch;

// EmojiCreateData is the typed request payload for Emoji.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*id;
  char*name;
  voxgig_value*organization;  // optional
  char*source;
  voxgig_value*updatedat;
  char*url;
} EmojiCreateData;

// EmojiRemoveMatch is the typed request payload for Emoji.remove.
typedef struct {
  char*id;
} EmojiRemoveMatch;

// EntityExternalLink is the typed data model for the entity_external_link entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  char*label;
  voxgig_value*project;  // optional
  double sortorder;
  voxgig_value*updatedat;
  char*url;
} EntityExternalLink;

// EntityExternalLinkLoadMatch is the typed request payload for EntityExternalLink.load.
typedef struct {
  char*id;
} EntityExternalLinkLoadMatch;

// EntityExternalLinkCreateData is the typed request payload for EntityExternalLink.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  char*label;
  voxgig_value*project;  // optional
  double sortorder;
  voxgig_value*updatedat;
  char*url;
} EntityExternalLinkCreateData;

// EntityExternalLinkUpdateData is the typed request payload for EntityExternalLink.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*initiative;  // optional
  char*label;  // optional
  voxgig_value*project;  // optional
  double sortorder;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} EntityExternalLinkUpdateData;

// EntityExternalLinkRemoveMatch is the typed request payload for EntityExternalLink.remove.
typedef struct {
  char*id;
} EntityExternalLinkRemoveMatch;

// ExternalUser is the typed data model for the external_user entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*avatarurl;  // optional
  voxgig_value*createdat;
  char*displayname;
  char*email;  // optional
  char*id;
  voxgig_value*lastseen;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*updatedat;
} ExternalUser;

// ExternalUserLoadMatch is the typed request payload for ExternalUser.load.
typedef struct {
  char*id;
} ExternalUserLoadMatch;

// ExternalUserListMatch is the typed request payload for ExternalUser.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ExternalUserListMatch;

// Favorite is the typed data model for the favorite entity.
typedef struct {
  voxgig_value*aiconversation;  // optional
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*customview;  // optional
  voxgig_value*customer;  // optional
  voxgig_value*cycle;  // optional
  voxgig_value*dashboard;  // optional
  char*detail;  // optional
  voxgig_value*document;  // optional
  voxgig_value*facet;  // optional
  char*foldername;  // optional
  char*icon;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*initiativelabel;  // optional
  char*initiativetab;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*label;  // optional
  voxgig_value*livefolderdefinition;  // optional
  char*livefolderpreset;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*parent;  // optional
  char*pipelinetab;  // optional
  voxgig_value*predefinedviewteam;  // optional
  char*predefinedviewtype;  // optional
  voxgig_value*project;  // optional
  voxgig_value*projectlabel;  // optional
  char*projecttab;  // optional
  voxgig_value*projectteam;  // optional
  voxgig_value*pullrequest;  // optional
  voxgig_value*release;  // optional
  voxgig_value*releasenote;  // optional
  voxgig_value*releasepipeline;  // optional
  double sortorder;
  voxgig_value*team;  // optional
  char*title;
  char*type;
  voxgig_value*updatedat;
  char*url;  // optional
  voxgig_value*user;  // optional
  voxgig_value*workflowdefinition;  // optional
} Favorite;

// FavoriteLoadMatch is the typed request payload for Favorite.load.
typedef struct {
  char*id;
} FavoriteLoadMatch;

// FavoriteListMatch is the typed request payload for Favorite.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} FavoriteListMatch;

// FavoriteCreateData is the typed request payload for Favorite.create.
typedef struct {
  voxgig_value*aiconversation;  // optional
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*customview;  // optional
  voxgig_value*customer;  // optional
  voxgig_value*cycle;  // optional
  voxgig_value*dashboard;  // optional
  char*detail;  // optional
  voxgig_value*document;  // optional
  voxgig_value*facet;  // optional
  char*foldername;  // optional
  char*icon;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*initiativelabel;  // optional
  char*initiativetab;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*label;  // optional
  voxgig_value*livefolderdefinition;  // optional
  char*livefolderpreset;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*parent;  // optional
  char*pipelinetab;  // optional
  voxgig_value*predefinedviewteam;  // optional
  char*predefinedviewtype;  // optional
  voxgig_value*project;  // optional
  voxgig_value*projectlabel;  // optional
  char*projecttab;  // optional
  voxgig_value*projectteam;  // optional
  voxgig_value*pullrequest;  // optional
  voxgig_value*release;  // optional
  voxgig_value*releasenote;  // optional
  voxgig_value*releasepipeline;  // optional
  double sortorder;
  voxgig_value*team;  // optional
  char*title;
  char*type;
  voxgig_value*updatedat;
  char*url;  // optional
  voxgig_value*user;  // optional
  voxgig_value*workflowdefinition;  // optional
} FavoriteCreateData;

// FavoriteUpdateData is the typed request payload for Favorite.update.
typedef struct {
  char*id;
  voxgig_value*aiconversation;  // optional
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*customview;  // optional
  voxgig_value*customer;  // optional
  voxgig_value*cycle;  // optional
  voxgig_value*dashboard;  // optional
  char*detail;  // optional
  voxgig_value*document;  // optional
  voxgig_value*facet;  // optional
  char*foldername;  // optional
  char*icon;  // optional
  voxgig_value*initiative;  // optional
  voxgig_value*initiativelabel;  // optional
  char*initiativetab;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*label;  // optional
  voxgig_value*livefolderdefinition;  // optional
  char*livefolderpreset;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*parent;  // optional
  char*pipelinetab;  // optional
  voxgig_value*predefinedviewteam;  // optional
  char*predefinedviewtype;  // optional
  voxgig_value*project;  // optional
  voxgig_value*projectlabel;  // optional
  char*projecttab;  // optional
  voxgig_value*projectteam;  // optional
  voxgig_value*pullrequest;  // optional
  voxgig_value*release;  // optional
  voxgig_value*releasenote;  // optional
  voxgig_value*releasepipeline;  // optional
  double sortorder;  // optional
  voxgig_value*team;  // optional
  char*title;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
  voxgig_value*user;  // optional
  voxgig_value*workflowdefinition;  // optional
} FavoriteUpdateData;

// FavoriteRemoveMatch is the typed request payload for Favorite.remove.
typedef struct {
  char*id;
} FavoriteRemoveMatch;

// GitAutomationState is the typed data model for the git_automation_state entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*event;
  char*id;
  voxgig_value*state;  // optional
  voxgig_value*targetbranch;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} GitAutomationState;

// GitAutomationStateCreateData is the typed request payload for GitAutomationState.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*event;
  char*id;
  voxgig_value*state;  // optional
  voxgig_value*targetbranch;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} GitAutomationStateCreateData;

// GitAutomationStateUpdateData is the typed request payload for GitAutomationState.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  char*event;  // optional
  voxgig_value*state;  // optional
  voxgig_value*targetbranch;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
} GitAutomationStateUpdateData;

// GitAutomationStateRemoveMatch is the typed request payload for GitAutomationState.remove.
typedef struct {
  char*id;
} GitAutomationStateRemoveMatch;

// GitAutomationTargetBranch is the typed data model for the git_automation_target_branch entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*branchpattern;
  voxgig_value*createdat;
  char*id;
  bool isregex;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} GitAutomationTargetBranch;

// GitAutomationTargetBranchCreateData is the typed request payload for GitAutomationTargetBranch.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*branchpattern;
  voxgig_value*createdat;
  char*id;
  bool isregex;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} GitAutomationTargetBranchCreateData;

// GitAutomationTargetBranchUpdateData is the typed request payload for GitAutomationTargetBranch.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*branchpattern;  // optional
  voxgig_value*createdat;  // optional
  bool isregex;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
} GitAutomationTargetBranchUpdateData;

// GitAutomationTargetBranchRemoveMatch is the typed request payload for GitAutomationTargetBranch.remove.
typedef struct {
  char*id;
} GitAutomationTargetBranchRemoveMatch;

// GitHubIntegrationConnectDetail is the typed data model for the git_hub_integration_connect_detail entity.
typedef struct {
  char*lostrepositorynames;  // optional
} GitHubIntegrationConnectDetail;

// GitHubIntegrationConnectDetailCreateData is the typed request payload for GitHubIntegrationConnectDetail.create.
typedef struct {
  char*code;  // optional
  char*redirect_uri;  // optional
  char*github_url;  // optional
  char*organization_name;  // optional
  char*access_token;  // optional
  char*expires_at;  // optional
  char*gitlab_url;  // optional
  bool readonly;  // optional
  char*validation_project_path;  // optional
  char*lostrepositorynames;  // optional
} GitHubIntegrationConnectDetailCreateData;

// GitHubIntegrationConnectDetailUpdateData is the typed request payload for GitHubIntegrationConnectDetail.update.
typedef struct {
  char*code;  // optional
  char*project_id;  // optional
  char*redirect_uri;  // optional
  char*service;  // optional
  char*custom_view_id;  // optional
  char*initiative_id;  // optional
  bool should_use_v2_auth;  // optional
  char*team_id;  // optional
  char*integration_id;  // optional
  char*lostrepositorynames;  // optional
} GitHubIntegrationConnectDetailUpdateData;

// Initiative is the typed data model for the initiative entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*color;  // optional
  voxgig_value*completedat;  // optional
  char*content;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*documentcontent;  // optional
  char*frequencyresolution;
  char*health;  // optional
  voxgig_value*healthupdatedat;  // optional
  char*icon;  // optional
  char*id;
  char*identifier;  // optional
  voxgig_value*integrationssettings;  // optional
  char*labelids;
  voxgig_value*lastupdate;  // optional
  voxgig_value*leadteam;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*parentinitiative;  // optional
  char*previousidentifiers;
  int64_t priority;
  double prioritysortorder;
  char*slugid;
  double sortorder;
  voxgig_value*startedat;  // optional
  char*status;
  voxgig_value*targetdate;  // optional
  char*targetdateresolution;  // optional
  bool trashed;  // optional
  double updatereminderfrequency;  // optional
  double updatereminderfrequencyinweeks;  // optional
  char*updateremindersday;  // optional
  double updateremindershour;  // optional
  voxgig_value*updatedat;
  char*url;
  char*visibility;
} Initiative;

// InitiativeLoadMatch is the typed request payload for Initiative.load.
typedef struct {
  char*id;
} InitiativeLoadMatch;

// InitiativeListMatch is the typed request payload for Initiative.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} InitiativeListMatch;

// InitiativeCreateData is the typed request payload for Initiative.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*color;  // optional
  voxgig_value*completedat;  // optional
  char*content;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*documentcontent;  // optional
  char*frequencyresolution;
  char*health;  // optional
  voxgig_value*healthupdatedat;  // optional
  char*icon;  // optional
  char*id;
  char*identifier;  // optional
  voxgig_value*integrationssettings;  // optional
  char*labelids;
  voxgig_value*lastupdate;  // optional
  voxgig_value*leadteam;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*parentinitiative;  // optional
  char*previousidentifiers;
  int64_t priority;
  double prioritysortorder;
  char*slugid;
  double sortorder;
  voxgig_value*startedat;  // optional
  char*status;
  voxgig_value*targetdate;  // optional
  char*targetdateresolution;  // optional
  bool trashed;  // optional
  double updatereminderfrequency;  // optional
  double updatereminderfrequencyinweeks;  // optional
  char*updateremindersday;  // optional
  double updateremindershour;  // optional
  voxgig_value*updatedat;
  char*url;
  char*visibility;
} InitiativeCreateData;

// InitiativeUpdateData is the typed request payload for Initiative.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*color;  // optional
  voxgig_value*completedat;  // optional
  char*content;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*documentcontent;  // optional
  char*frequencyresolution;  // optional
  char*health;  // optional
  voxgig_value*healthupdatedat;  // optional
  char*icon;  // optional
  char*identifier;  // optional
  voxgig_value*integrationssettings;  // optional
  char*labelids;  // optional
  voxgig_value*lastupdate;  // optional
  voxgig_value*leadteam;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*owner;  // optional
  voxgig_value*parentinitiative;  // optional
  char*previousidentifiers;  // optional
  int64_t priority;  // optional
  double prioritysortorder;  // optional
  char*slugid;  // optional
  double sortorder;  // optional
  voxgig_value*startedat;  // optional
  char*status;  // optional
  voxgig_value*targetdate;  // optional
  char*targetdateresolution;  // optional
  bool trashed;  // optional
  double updatereminderfrequency;  // optional
  double updatereminderfrequencyinweeks;  // optional
  char*updateremindersday;  // optional
  double updateremindershour;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
  char*visibility;  // optional
} InitiativeUpdateData;

// InitiativeRemoveMatch is the typed request payload for Initiative.remove.
typedef struct {
  char*id;
} InitiativeRemoveMatch;

// InitiativeLabel is the typed data model for the initiative_label entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*id;
  bool isgroup;
  voxgig_value*lastappliedat;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*updatedat;
} InitiativeLabel;

// InitiativeLabelLoadMatch is the typed request payload for InitiativeLabel.load.
typedef struct {
  char*id;
} InitiativeLabelLoadMatch;

// InitiativeLabelListMatch is the typed request payload for InitiativeLabel.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} InitiativeLabelListMatch;

// InitiativeLabelCreateData is the typed request payload for InitiativeLabel.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*id;
  bool isgroup;
  voxgig_value*lastappliedat;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*updatedat;
} InitiativeLabelCreateData;

// InitiativeLabelUpdateData is the typed request payload for InitiativeLabel.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  bool isgroup;  // optional
  voxgig_value*lastappliedat;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*updatedat;  // optional
} InitiativeLabelUpdateData;

// InitiativeLabelRemoveMatch is the typed request payload for InitiativeLabel.remove.
typedef struct {
  char*id;
} InitiativeLabelRemoveMatch;

// InitiativeLeadTeamChangeImpact is the typed data model for the initiative_lead_team_change_impact entity.
typedef struct {
  int64_t affecteddescendantcount;
  char*id;  // optional
  bool visibilitymaychange;
} InitiativeLeadTeamChangeImpact;

// InitiativeLeadTeamChangeImpactLoadMatch is the typed request payload for InitiativeLeadTeamChangeImpact.load.
typedef struct {
  char*id;
  char*lead_team_id;  // optional
} InitiativeLeadTeamChangeImpactLoadMatch;

// InitiativeRelation is the typed data model for the initiative_relation entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*relatedinitiative;  // optional
  double sortorder;
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} InitiativeRelation;

// InitiativeRelationLoadMatch is the typed request payload for InitiativeRelation.load.
typedef struct {
  char*id;
} InitiativeRelationLoadMatch;

// InitiativeRelationListMatch is the typed request payload for InitiativeRelation.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} InitiativeRelationListMatch;

// InitiativeRelationCreateData is the typed request payload for InitiativeRelation.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*relatedinitiative;  // optional
  double sortorder;
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} InitiativeRelationCreateData;

// InitiativeRelationUpdateData is the typed request payload for InitiativeRelation.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*initiative;  // optional
  voxgig_value*relatedinitiative;  // optional
  double sortorder;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*user;  // optional
} InitiativeRelationUpdateData;

// InitiativeRelationRemoveMatch is the typed request payload for InitiativeRelation.remove.
typedef struct {
  char*id;
} InitiativeRelationRemoveMatch;

// InitiativeToProject is the typed data model for the initiative_to_project entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*project;  // optional
  char*sortorder;
  voxgig_value*updatedat;
} InitiativeToProject;

// InitiativeToProjectLoadMatch is the typed request payload for InitiativeToProject.load.
typedef struct {
  char*id;
} InitiativeToProjectLoadMatch;

// InitiativeToProjectListMatch is the typed request payload for InitiativeToProject.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} InitiativeToProjectListMatch;

// InitiativeToProjectCreateData is the typed request payload for InitiativeToProject.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*project;  // optional
  char*sortorder;
  voxgig_value*updatedat;
} InitiativeToProjectCreateData;

// InitiativeToProjectUpdateData is the typed request payload for InitiativeToProject.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*initiative;  // optional
  voxgig_value*project;  // optional
  char*sortorder;  // optional
  voxgig_value*updatedat;  // optional
} InitiativeToProjectUpdateData;

// InitiativeToProjectRemoveMatch is the typed request payload for InitiativeToProject.remove.
typedef struct {
  char*id;
} InitiativeToProjectRemoveMatch;

// InitiativeUpdate is the typed data model for the initiative_update entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*body;
  char*bodydata;
  int64_t commentcount;
  voxgig_value*createdat;
  voxgig_value*diff;  // optional
  char*diffmarkdown;  // optional
  voxgig_value*editedat;  // optional
  char*health;
  char*id;
  voxgig_value*infosnapshot;  // optional
  voxgig_value*initiative;  // optional
  bool isdiffhidden;
  bool isstale;
  voxgig_value*reactiondata;
  char*slugid;
  voxgig_value*updatedat;
  char*url;
  voxgig_value*user;  // optional
} InitiativeUpdate;

// InitiativeUpdateLoadMatch is the typed request payload for InitiativeUpdate.load.
typedef struct {
  char*id;
} InitiativeUpdateLoadMatch;

// InitiativeUpdateListMatch is the typed request payload for InitiativeUpdate.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} InitiativeUpdateListMatch;

// InitiativeUpdateCreateData is the typed request payload for InitiativeUpdate.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*body;
  char*bodydata;
  int64_t commentcount;
  voxgig_value*createdat;
  voxgig_value*diff;  // optional
  char*diffmarkdown;  // optional
  voxgig_value*editedat;  // optional
  char*health;
  char*id;
  voxgig_value*infosnapshot;  // optional
  voxgig_value*initiative;  // optional
  bool isdiffhidden;
  bool isstale;
  voxgig_value*reactiondata;
  char*slugid;
  voxgig_value*updatedat;
  char*url;
  voxgig_value*user;  // optional
} InitiativeUpdateCreateData;

// InitiativeUpdateUpdateData is the typed request payload for InitiativeUpdate.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*body;  // optional
  char*bodydata;  // optional
  int64_t commentcount;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*diff;  // optional
  char*diffmarkdown;  // optional
  voxgig_value*editedat;  // optional
  char*health;  // optional
  voxgig_value*infosnapshot;  // optional
  voxgig_value*initiative;  // optional
  bool isdiffhidden;  // optional
  bool isstale;  // optional
  voxgig_value*reactiondata;  // optional
  char*slugid;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
  voxgig_value*user;  // optional
} InitiativeUpdateUpdateData;

// Integration is the typed data model for the integration entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*id;
  voxgig_value*organization;  // optional
  char*service;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} Integration;

// IntegrationLoadMatch is the typed request payload for Integration.load.
typedef struct {
  char*id;
} IntegrationLoadMatch;

// IntegrationListMatch is the typed request payload for Integration.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} IntegrationListMatch;

// IntegrationCreateData is the typed request payload for Integration.create.
typedef struct {
  char*code;  // optional
  char*code_verifier;  // optional
  char*redirect_uri;  // optional
  char*subdomain;  // optional
  char*environment;  // optional
  char*project_key;  // optional
  char*domain_url;  // optional
  char*requested_scope;  // optional
  bool should_use_v2_auth;  // optional
  bool code_access;  // optional
  char*enterprise_url;  // optional
  char*mcp_server_definition_id;  // optional
  char*server_url;  // optional
  char*team_id;  // optional
  char*workflow_definition_draft_id;  // optional
  char*workflow_definition_id;  // optional
  char*api_key;  // optional
  char*access_token;  // optional
  char*bot_user_role;  // optional
  char*custom_api_url;  // optional
  char*scope;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*id;
  voxgig_value*organization;  // optional
  char*service;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} IntegrationCreateData;

// IntegrationUpdateData is the typed request payload for Integration.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*organization;  // optional
  char*service;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
} IntegrationUpdateData;

// IntegrationRemoveMatch is the typed request payload for Integration.remove.
typedef struct {
  char*id;
  bool skip_installation_deletion;  // optional
} IntegrationRemoveMatch;

// IntegrationTemplate is the typed data model for the integration_template entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*foreignentityid;  // optional
  char*id;
  voxgig_value*integration;  // optional
  voxgig_value*template;  // optional
  voxgig_value*updatedat;
} IntegrationTemplate;

// IntegrationTemplateLoadMatch is the typed request payload for IntegrationTemplate.load.
typedef struct {
  char*id;
} IntegrationTemplateLoadMatch;

// IntegrationTemplateListMatch is the typed request payload for IntegrationTemplate.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} IntegrationTemplateListMatch;

// IntegrationTemplateCreateData is the typed request payload for IntegrationTemplate.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*foreignentityid;  // optional
  char*id;
  voxgig_value*integration;  // optional
  voxgig_value*template;  // optional
  voxgig_value*updatedat;
} IntegrationTemplateCreateData;

// IntegrationTemplateRemoveMatch is the typed request payload for IntegrationTemplate.remove.
typedef struct {
  char*id;
} IntegrationTemplateRemoveMatch;

// IntegrationsSetting is the typed data model for the integrations_setting entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*contextviewtype;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*initiative;  // optional
  bool microsoftteamsprojectupdatecreated;  // optional
  voxgig_value*project;  // optional
  bool slackinitiativeupdatecreated;  // optional
  bool slackissueaddedtotriage;  // optional
  bool slackissueaddedtoview;  // optional
  bool slackissuenewcomment;  // optional
  bool slackissueslabreached;  // optional
  bool slackissueslahighrisk;  // optional
  bool slackissuestatuschangedall;  // optional
  bool slackissuestatuschangeddone;  // optional
  bool slackprojectupdatecreated;  // optional
  bool slackprojectupdatecreatedtoteam;  // optional
  bool slackprojectupdatecreatedtoworkspace;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} IntegrationsSetting;

// IntegrationsSettingLoadMatch is the typed request payload for IntegrationsSetting.load.
typedef struct {
  char*id;
} IntegrationsSettingLoadMatch;

// IntegrationsSettingCreateData is the typed request payload for IntegrationsSetting.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*contextviewtype;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*initiative;  // optional
  bool microsoftteamsprojectupdatecreated;  // optional
  voxgig_value*project;  // optional
  bool slackinitiativeupdatecreated;  // optional
  bool slackissueaddedtotriage;  // optional
  bool slackissueaddedtoview;  // optional
  bool slackissuenewcomment;  // optional
  bool slackissueslabreached;  // optional
  bool slackissueslahighrisk;  // optional
  bool slackissuestatuschangedall;  // optional
  bool slackissuestatuschangeddone;  // optional
  bool slackprojectupdatecreated;  // optional
  bool slackprojectupdatecreatedtoteam;  // optional
  bool slackprojectupdatecreatedtoworkspace;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} IntegrationsSettingCreateData;

// IntegrationsSettingUpdateData is the typed request payload for IntegrationsSetting.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*contextviewtype;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*initiative;  // optional
  bool microsoftteamsprojectupdatecreated;  // optional
  voxgig_value*project;  // optional
  bool slackinitiativeupdatecreated;  // optional
  bool slackissueaddedtotriage;  // optional
  bool slackissueaddedtoview;  // optional
  bool slackissuenewcomment;  // optional
  bool slackissueslabreached;  // optional
  bool slackissueslahighrisk;  // optional
  bool slackissuestatuschangedall;  // optional
  bool slackissuestatuschangeddone;  // optional
  bool slackprojectupdatecreated;  // optional
  bool slackprojectupdatecreatedtoteam;  // optional
  bool slackprojectupdatecreatedtoworkspace;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
} IntegrationsSettingUpdateData;

// Issue is the typed data model for the issue entity.
typedef struct {
  voxgig_value*activitysummary;  // optional
  voxgig_value*addedtocycleat;  // optional
  voxgig_value*addedtoprojectat;  // optional
  voxgig_value*addedtoteamat;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*asksexternaluserrequester;  // optional
  voxgig_value*asksrequester;  // optional
  voxgig_value*assignee;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*autoclosedat;  // optional
  voxgig_value*botactor;  // optional
  char*branchname;
  voxgig_value*canceledat;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  int64_t customerticketcount;
  voxgig_value*cycle;  // optional
  voxgig_value*delegate;  // optional
  char*description;  // optional
  char*descriptionstate;  // optional
  voxgig_value*documentcontent;  // optional
  voxgig_value*duedate;  // optional
  double estimate;  // optional
  voxgig_value*externalusercreator;  // optional
  voxgig_value*favorite;  // optional
  char*id;
  char*identifier;
  bool inheritssharedaccess;
  char*integrationsourcetype;  // optional
  char*labelids;
  voxgig_value*lastappliedtemplate;  // optional
  double number;
  voxgig_value*parent;  // optional
  char*previousidentifiers;
  double priority;
  char*prioritylabel;
  double prioritysortorder;
  voxgig_value*project;  // optional
  voxgig_value*projectmilestone;  // optional
  voxgig_value*reactiondata;
  voxgig_value*recurringissuetemplate;  // optional
  voxgig_value*slabreachesat;  // optional
  voxgig_value*slahighriskat;  // optional
  voxgig_value*slamediumriskat;  // optional
  voxgig_value*slastartedat;  // optional
  char*slatype;  // optional
  voxgig_value*snoozedby;  // optional
  voxgig_value*snoozeduntilat;  // optional
  double sortorder;
  voxgig_value*sourcecomment;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*startedtriageat;  // optional
  voxgig_value*state;  // optional
  double subissuesortorder;  // optional
  voxgig_value*suggestionsgeneratedat;  // optional
  voxgig_value*summary;  // optional
  voxgig_value*team;  // optional
  char*title;
  bool trashed;  // optional
  voxgig_value*triagedat;  // optional
  bool trusted;  // optional
  voxgig_value*updatedat;
  char*url;
} Issue;

// IssueLoadMatch is the typed request payload for Issue.load.
typedef struct {
  char*branch_name;  // optional
  char*id;  // optional
} IssueLoadMatch;

// IssueListMatch is the typed request payload for Issue.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  char*file_key;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
  char*query;  // optional
} IssueListMatch;

// IssueCreateData is the typed request payload for Issue.create.
typedef struct {
  voxgig_value*activitysummary;  // optional
  voxgig_value*addedtocycleat;  // optional
  voxgig_value*addedtoprojectat;  // optional
  voxgig_value*addedtoteamat;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*asksexternaluserrequester;  // optional
  voxgig_value*asksrequester;  // optional
  voxgig_value*assignee;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*autoclosedat;  // optional
  voxgig_value*botactor;  // optional
  char*branchname;
  voxgig_value*canceledat;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  int64_t customerticketcount;
  voxgig_value*cycle;  // optional
  voxgig_value*delegate;  // optional
  char*description;  // optional
  char*descriptionstate;  // optional
  voxgig_value*documentcontent;  // optional
  voxgig_value*duedate;  // optional
  double estimate;  // optional
  voxgig_value*externalusercreator;  // optional
  voxgig_value*favorite;  // optional
  char*id;
  char*identifier;
  bool inheritssharedaccess;
  char*integrationsourcetype;  // optional
  char*labelids;
  voxgig_value*lastappliedtemplate;  // optional
  double number;
  voxgig_value*parent;  // optional
  char*previousidentifiers;
  double priority;
  char*prioritylabel;
  double prioritysortorder;
  voxgig_value*project;  // optional
  voxgig_value*projectmilestone;  // optional
  voxgig_value*reactiondata;
  voxgig_value*recurringissuetemplate;  // optional
  voxgig_value*slabreachesat;  // optional
  voxgig_value*slahighriskat;  // optional
  voxgig_value*slamediumriskat;  // optional
  voxgig_value*slastartedat;  // optional
  char*slatype;  // optional
  voxgig_value*snoozedby;  // optional
  voxgig_value*snoozeduntilat;  // optional
  double sortorder;
  voxgig_value*sourcecomment;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*startedtriageat;  // optional
  voxgig_value*state;  // optional
  double subissuesortorder;  // optional
  voxgig_value*suggestionsgeneratedat;  // optional
  voxgig_value*summary;  // optional
  voxgig_value*team;  // optional
  char*title;
  bool trashed;  // optional
  voxgig_value*triagedat;  // optional
  bool trusted;  // optional
  voxgig_value*updatedat;
  char*url;
} IssueCreateData;

// IssueUpdateData is the typed request payload for Issue.update.
typedef struct {
  char*id;
  voxgig_value*activitysummary;  // optional
  voxgig_value*addedtocycleat;  // optional
  voxgig_value*addedtoprojectat;  // optional
  voxgig_value*addedtoteamat;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*asksexternaluserrequester;  // optional
  voxgig_value*asksrequester;  // optional
  voxgig_value*assignee;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*autoclosedat;  // optional
  voxgig_value*botactor;  // optional
  char*branchname;  // optional
  voxgig_value*canceledat;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  int64_t customerticketcount;  // optional
  voxgig_value*cycle;  // optional
  voxgig_value*delegate;  // optional
  char*description;  // optional
  char*descriptionstate;  // optional
  voxgig_value*documentcontent;  // optional
  voxgig_value*duedate;  // optional
  double estimate;  // optional
  voxgig_value*externalusercreator;  // optional
  voxgig_value*favorite;  // optional
  char*identifier;  // optional
  bool inheritssharedaccess;  // optional
  char*integrationsourcetype;  // optional
  char*labelids;  // optional
  voxgig_value*lastappliedtemplate;  // optional
  double number;  // optional
  voxgig_value*parent;  // optional
  char*previousidentifiers;  // optional
  double priority;  // optional
  char*prioritylabel;  // optional
  double prioritysortorder;  // optional
  voxgig_value*project;  // optional
  voxgig_value*projectmilestone;  // optional
  voxgig_value*reactiondata;  // optional
  voxgig_value*recurringissuetemplate;  // optional
  voxgig_value*slabreachesat;  // optional
  voxgig_value*slahighriskat;  // optional
  voxgig_value*slamediumriskat;  // optional
  voxgig_value*slastartedat;  // optional
  char*slatype;  // optional
  voxgig_value*snoozedby;  // optional
  voxgig_value*snoozeduntilat;  // optional
  double sortorder;  // optional
  voxgig_value*sourcecomment;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*startedtriageat;  // optional
  voxgig_value*state;  // optional
  double subissuesortorder;  // optional
  voxgig_value*suggestionsgeneratedat;  // optional
  voxgig_value*summary;  // optional
  voxgig_value*team;  // optional
  char*title;  // optional
  bool trashed;  // optional
  voxgig_value*triagedat;  // optional
  bool trusted;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} IssueUpdateData;

// IssueRemoveMatch is the typed request payload for Issue.remove.
typedef struct {
  char*id;
  bool permanently_delete;  // optional
} IssueRemoveMatch;

// IssueImport is the typed data model for the issue_import entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*creatorid;  // optional
  char*csvfileurl;  // optional
  char*displayname;
  char*error;  // optional
  voxgig_value*errormetadata;  // optional
  char*id;
  voxgig_value*mapping;  // optional
  double progress;  // optional
  char*service;
  voxgig_value*servicemetadata;  // optional
  char*status;
  char*teamname;  // optional
  voxgig_value*updatedat;
} IssueImport;

// IssueImportCreateData is the typed request payload for IssueImport.create.
typedef struct {
  char*id;  // optional
  bool include_closed_issue;  // optional
  bool instant_process;  // optional
  char*jira_email;  // optional
  char*jira_hostname;  // optional
  char*jira_project;  // optional
  char*jira_token;  // optional
  char*jql;  // optional
  char*team_id;  // optional
  char*team_name;  // optional
  char*asana_team_name;  // optional
  char*asana_token;  // optional
  char*clubhouse_group_name;  // optional
  char*clubhouse_token;  // optional
  char*csv_url;  // optional
  char*github_label;  // optional
  int64_t github_repo_id;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*creatorid;  // optional
  char*csvfileurl;  // optional
  char*displayname;
  char*error;  // optional
  voxgig_value*errormetadata;  // optional
  voxgig_value*mapping;  // optional
  double progress;  // optional
  char*service;
  voxgig_value*servicemetadata;  // optional
  char*status;
  char*teamname;  // optional
  voxgig_value*updatedat;
} IssueImportCreateData;

// IssueImportUpdateData is the typed request payload for IssueImport.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  char*creatorid;  // optional
  char*csvfileurl;  // optional
  char*displayname;  // optional
  char*error;  // optional
  voxgig_value*errormetadata;  // optional
  voxgig_value*mapping;  // optional
  double progress;  // optional
  char*service;  // optional
  voxgig_value*servicemetadata;  // optional
  char*status;  // optional
  char*teamname;  // optional
  voxgig_value*updatedat;  // optional
} IssueImportUpdateData;

// IssueImportRemoveMatch is the typed request payload for IssueImport.remove.
typedef struct {
  char*issue_import_id;
} IssueImportRemoveMatch;

// IssueLabel is the typed data model for the issue_label entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*grouptype;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  bool isgroup;
  voxgig_value*lastappliedat;  // optional
  char*name;
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} IssueLabel;

// IssueLabelLoadMatch is the typed request payload for IssueLabel.load.
typedef struct {
  char*id;
} IssueLabelLoadMatch;

// IssueLabelListMatch is the typed request payload for IssueLabel.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} IssueLabelListMatch;

// IssueLabelCreateData is the typed request payload for IssueLabel.create.
typedef struct {
  bool replace_team_label;  // optional
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*grouptype;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  bool isgroup;
  voxgig_value*lastappliedat;  // optional
  char*name;
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} IssueLabelCreateData;

// IssueLabelUpdateData is the typed request payload for IssueLabel.update.
typedef struct {
  char*id;
  bool replace_team_label;  // optional
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*grouptype;  // optional
  voxgig_value*inheritedfrom;  // optional
  bool isgroup;  // optional
  voxgig_value*lastappliedat;  // optional
  char*name;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
} IssueLabelUpdateData;

// IssueLabelRemoveMatch is the typed request payload for IssueLabel.remove.
typedef struct {
  char*id;
} IssueLabelRemoveMatch;

// IssuePriorityValue is the typed data model for the issue_priority_value entity.
typedef struct {
  char*label;
  int64_t priority;
} IssuePriorityValue;

// IssuePriorityValueListMatch is the typed request payload for IssuePriorityValue.list.
typedef struct {
  char*label;  // optional
  int64_t priority;  // optional
} IssuePriorityValueListMatch;

// IssueRelation is the typed data model for the issue_relation entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*relatedissue;  // optional
  char*type;
  voxgig_value*updatedat;
} IssueRelation;

// IssueRelationLoadMatch is the typed request payload for IssueRelation.load.
typedef struct {
  char*id;
} IssueRelationLoadMatch;

// IssueRelationListMatch is the typed request payload for IssueRelation.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} IssueRelationListMatch;

// IssueRelationCreateData is the typed request payload for IssueRelation.create.
typedef struct {
  voxgig_value*override_created_at;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*relatedissue;  // optional
  char*type;
  voxgig_value*updatedat;
} IssueRelationCreateData;

// IssueRelationUpdateData is the typed request payload for IssueRelation.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*relatedissue;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
} IssueRelationUpdateData;

// IssueRelationRemoveMatch is the typed request payload for IssueRelation.remove.
typedef struct {
  char*id;
} IssueRelationRemoveMatch;

// IssueSearchResult is the typed data model for the issue_search_result entity.
typedef struct {
  voxgig_value*activitysummary;  // optional
  voxgig_value*addedtocycleat;  // optional
  voxgig_value*addedtoprojectat;  // optional
  voxgig_value*addedtoteamat;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*asksexternaluserrequester;  // optional
  voxgig_value*asksrequester;  // optional
  voxgig_value*assignee;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*autoclosedat;  // optional
  voxgig_value*botactor;  // optional
  char*branchname;
  voxgig_value*canceledat;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  int64_t customerticketcount;
  voxgig_value*cycle;  // optional
  voxgig_value*delegate;  // optional
  char*description;  // optional
  char*descriptionstate;  // optional
  voxgig_value*documentcontent;  // optional
  voxgig_value*duedate;  // optional
  double estimate;  // optional
  voxgig_value*externalusercreator;  // optional
  voxgig_value*favorite;  // optional
  char*id;
  char*identifier;
  bool inheritssharedaccess;
  char*integrationsourcetype;  // optional
  char*labelids;
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*metadata;
  double number;
  voxgig_value*parent;  // optional
  char*previousidentifiers;
  double priority;
  char*prioritylabel;
  double prioritysortorder;
  voxgig_value*project;  // optional
  voxgig_value*projectmilestone;  // optional
  voxgig_value*reactiondata;
  voxgig_value*recurringissuetemplate;  // optional
  voxgig_value*slabreachesat;  // optional
  voxgig_value*slahighriskat;  // optional
  voxgig_value*slamediumriskat;  // optional
  voxgig_value*slastartedat;  // optional
  char*slatype;  // optional
  voxgig_value*snoozedby;  // optional
  voxgig_value*snoozeduntilat;  // optional
  double sortorder;
  voxgig_value*sourcecomment;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*startedtriageat;  // optional
  voxgig_value*state;  // optional
  double subissuesortorder;  // optional
  voxgig_value*suggestionsgeneratedat;  // optional
  voxgig_value*summary;  // optional
  voxgig_value*team;  // optional
  char*title;
  bool trashed;  // optional
  voxgig_value*triagedat;  // optional
  bool trusted;  // optional
  voxgig_value*updatedat;
  char*url;
} IssueSearchResult;

// IssueSearchResultListMatch is the typed request payload for IssueSearchResult.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  bool include_comment;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
  char*team_id;  // optional
  char*term;
} IssueSearchResultListMatch;

// IssueToRelease is the typed data model for the issue_to_release entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*release;  // optional
  voxgig_value*updatedat;
} IssueToRelease;

// IssueToReleaseLoadMatch is the typed request payload for IssueToRelease.load.
typedef struct {
  char*id;
} IssueToReleaseLoadMatch;

// IssueToReleaseListMatch is the typed request payload for IssueToRelease.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} IssueToReleaseListMatch;

// IssueToReleaseCreateData is the typed request payload for IssueToRelease.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*issue;  // optional
  voxgig_value*release;  // optional
  voxgig_value*updatedat;
} IssueToReleaseCreateData;

// IssueToReleaseRemoveMatch is the typed request payload for IssueToRelease.remove.
typedef struct {
  char*id;
} IssueToReleaseRemoveMatch;

// LogoutResponse is the typed data model for the logout_response entity.
typedef struct {
  bool success;
} LogoutResponse;

// LogoutResponseCreateData is the typed request payload for LogoutResponse.create.
typedef struct {
  char*reason;  // optional
  bool success;
} LogoutResponseCreateData;

// LogoutResponseUpdateData is the typed request payload for LogoutResponse.update.
typedef struct {
  char*session_id;
  bool success;  // optional
} LogoutResponseUpdateData;

// Notification is the typed data model for the notification entity.
typedef struct {
  voxgig_value*actor;  // optional
  char*actoravatarcolor;
  char*actoravatarurl;  // optional
  bool actorinactive;
  char*actorinitials;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*botactor;  // optional
  char*category;
  voxgig_value*createdat;
  voxgig_value*emailedat;  // optional
  voxgig_value*externaluseractor;  // optional
  char*groupingkey;
  double groupingpriority;
  char*id;
  char*inboxurl;
  char*initiativeupdatehealth;  // optional
  bool islinearactor;
  char*issuestatustype;  // optional
  char*projectupdatehealth;  // optional
  voxgig_value*readat;  // optional
  voxgig_value*snoozeduntilat;  // optional
  char*subtitle;
  char*title;
  char*type;
  voxgig_value*unsnoozedat;  // optional
  voxgig_value*updatedat;
  char*url;
  voxgig_value*user;  // optional
} Notification;

// NotificationLoadMatch is the typed request payload for Notification.load.
typedef struct {
  char*id;
} NotificationLoadMatch;

// NotificationListMatch is the typed request payload for Notification.list.
typedef struct {
  char*after;  // optional
  int64_t first;  // optional
  bool unread_only;  // optional
  char*before;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} NotificationListMatch;

// NotificationSubscription is the typed data model for the notification_subscription entity.
typedef struct {
  bool active;
  voxgig_value*archivedat;  // optional
  char*contextviewtype;  // optional
  voxgig_value*createdat;
  voxgig_value*customview;  // optional
  voxgig_value*customer;  // optional
  voxgig_value*cycle;  // optional
  char*id;
  voxgig_value*initiative;  // optional
  voxgig_value*label;  // optional
  voxgig_value*project;  // optional
  voxgig_value*subscriber;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
  char*usercontextviewtype;  // optional
} NotificationSubscription;

// NotificationSubscriptionLoadMatch is the typed request payload for NotificationSubscription.load.
typedef struct {
  char*id;
} NotificationSubscriptionLoadMatch;

// NotificationSubscriptionListMatch is the typed request payload for NotificationSubscription.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} NotificationSubscriptionListMatch;

// OAuthApplication is the typed data model for the o_auth_application entity.
typedef struct {
  char*clientid;
  voxgig_value*createdat;
  char*description;  // optional
  char*developer;
  char*developerurl;
  char*distribution;
  char*granttypes;
  char*id;
  char*imageurl;  // optional
  char*name;
  char*redirecturis;
  voxgig_value*updatedat;
  bool webhookenabled;
  char*webhookresourcetypes;
  char*webhookurl;  // optional
} OAuthApplication;

// OAuthApplicationLoadMatch is the typed request payload for OAuthApplication.load.
typedef struct {
  char*id;
} OAuthApplicationLoadMatch;

// OAuthApplicationListMatch is the typed request payload for OAuthApplication.list.
typedef struct {
  char*clientid;  // optional
  voxgig_value*createdat;  // optional
  char*description;  // optional
  char*developer;  // optional
  char*developerurl;  // optional
  char*distribution;  // optional
  char*granttypes;  // optional
  char*id;  // optional
  char*imageurl;  // optional
  char*name;  // optional
  char*redirecturis;  // optional
  voxgig_value*updatedat;  // optional
  bool webhookenabled;  // optional
  char*webhookresourcetypes;  // optional
  char*webhookurl;  // optional
} OAuthApplicationListMatch;

// OAuthApplicationCreateData is the typed request payload for OAuthApplication.create.
typedef struct {
  char*clientid;
  voxgig_value*createdat;
  char*description;  // optional
  char*developer;
  char*developerurl;
  char*distribution;
  char*granttypes;
  char*id;
  char*imageurl;  // optional
  char*name;
  char*redirecturis;
  voxgig_value*updatedat;
  bool webhookenabled;
  char*webhookresourcetypes;
  char*webhookurl;  // optional
} OAuthApplicationCreateData;

// OAuthApplicationUpdateData is the typed request payload for OAuthApplication.update.
typedef struct {
  char*id;
  char*clientid;  // optional
  voxgig_value*createdat;  // optional
  char*description;  // optional
  char*developer;  // optional
  char*developerurl;  // optional
  char*distribution;  // optional
  char*granttypes;  // optional
  char*imageurl;  // optional
  char*name;  // optional
  char*redirecturis;  // optional
  voxgig_value*updatedat;  // optional
  bool webhookenabled;  // optional
  char*webhookresourcetypes;  // optional
  char*webhookurl;  // optional
} OAuthApplicationUpdateData;

// Organization is the typed data model for the organization entity.
typedef struct {
  bool agentautomationenabled;
  bool aiaddonenabled;
  bool aidiscussionsummariesenabled;
  voxgig_value*aiproviderconfiguration;  // optional
  bool aitelemetryenabled;
  bool aithreadsummariesenabled;
  char*allowedfileuploadcontenttypes;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*authsettings;
  bool codeintelligenceenabled;
  char*codeintelligencerepository;  // optional
  bool codingagentenabled;
  voxgig_value*codingagentsettings;
  voxgig_value*createdat;
  int64_t createdissuecount;
  int64_t customercount;
  voxgig_value*customersconfiguration;
  bool customersenabled;
  char*defaultfeedsummaryschedule;  // optional
  char*defaulthomeview;  // optional
  char*defaulthomeviewtargetid;  // optional
  voxgig_value*deletionrequestedat;  // optional
  bool feedenabled;
  double fiscalyearstartmonth;
  bool generatedupdatesenabled;
  char*gitbranchformat;  // optional
  bool gitlinkbackdescriptionsenabled;
  bool gitlinkbackmessagesenabled;
  bool gitpubliclinkbackmessagesenabled;
  bool hipaacomplianceenabled;
  char*id;
  double initiativeupdatereminderfrequencyinweeks;  // optional
  char*initiativeupdateremindersday;
  double initiativeupdateremindershour;
  bool linearagentenabled;
  voxgig_value*linearagentsettings;
  char*logourl;  // optional
  char*name;
  double perioduploadvolume;
  char*previousurlkeys;
  double projectupdatereminderfrequencyinweeks;  // optional
  char*projectupdateremindersday;
  double projectupdateremindershour;
  char*pullrequestissuemode;
  bool pullrequesttourenabled;
  char*releasechannel;
  bool releasesenabled;
  bool restrictagentinvocationtomembers;  // optional
  bool roadmapenabled;
  bool samlenabled;
  voxgig_value*samlsettings;  // optional
  bool scimenabled;
  voxgig_value*scimsettings;  // optional
  voxgig_value*securitysettings;
  bool slackautocreateprojectchannel;
  voxgig_value*slackprojectchannelintegration;  // optional
  char*slackprojectchannelprefix;
  bool slackprojectchannelsenabled;
  voxgig_value*subscription;  // optional
  voxgig_value*themesettings;  // optional
  voxgig_value*trialendsat;  // optional
  voxgig_value*trialstartsat;  // optional
  voxgig_value*updatedat;
  char*urlkey;
  int64_t usercount;
  double workingdays;
} Organization;

// OrganizationLoadMatch is the typed request payload for Organization.load.
typedef struct {
  bool agentautomationenabled;  // optional
  bool aiaddonenabled;  // optional
  bool aidiscussionsummariesenabled;  // optional
  voxgig_value*aiproviderconfiguration;  // optional
  bool aitelemetryenabled;  // optional
  bool aithreadsummariesenabled;  // optional
  char*allowedfileuploadcontenttypes;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*authsettings;  // optional
  bool codeintelligenceenabled;  // optional
  char*codeintelligencerepository;  // optional
  bool codingagentenabled;  // optional
  voxgig_value*codingagentsettings;  // optional
  voxgig_value*createdat;  // optional
  int64_t createdissuecount;  // optional
  int64_t customercount;  // optional
  voxgig_value*customersconfiguration;  // optional
  bool customersenabled;  // optional
  char*defaultfeedsummaryschedule;  // optional
  char*defaulthomeview;  // optional
  char*defaulthomeviewtargetid;  // optional
  voxgig_value*deletionrequestedat;  // optional
  bool feedenabled;  // optional
  double fiscalyearstartmonth;  // optional
  bool generatedupdatesenabled;  // optional
  char*gitbranchformat;  // optional
  bool gitlinkbackdescriptionsenabled;  // optional
  bool gitlinkbackmessagesenabled;  // optional
  bool gitpubliclinkbackmessagesenabled;  // optional
  bool hipaacomplianceenabled;  // optional
  char*id;
  double initiativeupdatereminderfrequencyinweeks;  // optional
  char*initiativeupdateremindersday;  // optional
  double initiativeupdateremindershour;  // optional
  bool linearagentenabled;  // optional
  voxgig_value*linearagentsettings;  // optional
  char*logourl;  // optional
  char*name;  // optional
  double perioduploadvolume;  // optional
  char*previousurlkeys;  // optional
  double projectupdatereminderfrequencyinweeks;  // optional
  char*projectupdateremindersday;  // optional
  double projectupdateremindershour;  // optional
  char*pullrequestissuemode;  // optional
  bool pullrequesttourenabled;  // optional
  char*releasechannel;  // optional
  bool releasesenabled;  // optional
  bool restrictagentinvocationtomembers;  // optional
  bool roadmapenabled;  // optional
  bool samlenabled;  // optional
  voxgig_value*samlsettings;  // optional
  bool scimenabled;  // optional
  voxgig_value*scimsettings;  // optional
  voxgig_value*securitysettings;  // optional
  bool slackautocreateprojectchannel;  // optional
  voxgig_value*slackprojectchannelintegration;  // optional
  char*slackprojectchannelprefix;  // optional
  bool slackprojectchannelsenabled;  // optional
  voxgig_value*subscription;  // optional
  voxgig_value*themesettings;  // optional
  voxgig_value*trialendsat;  // optional
  voxgig_value*trialstartsat;  // optional
  voxgig_value*updatedat;  // optional
  char*urlkey;  // optional
  int64_t usercount;  // optional
  double workingdays;  // optional
} OrganizationLoadMatch;

// OrganizationUpdateData is the typed request payload for Organization.update.
typedef struct {
  bool agentautomationenabled;  // optional
  bool aiaddonenabled;  // optional
  bool aidiscussionsummariesenabled;  // optional
  voxgig_value*aiproviderconfiguration;  // optional
  bool aitelemetryenabled;  // optional
  bool aithreadsummariesenabled;  // optional
  char*allowedfileuploadcontenttypes;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*authsettings;  // optional
  bool codeintelligenceenabled;  // optional
  char*codeintelligencerepository;  // optional
  bool codingagentenabled;  // optional
  voxgig_value*codingagentsettings;  // optional
  voxgig_value*createdat;  // optional
  int64_t createdissuecount;  // optional
  int64_t customercount;  // optional
  voxgig_value*customersconfiguration;  // optional
  bool customersenabled;  // optional
  char*defaultfeedsummaryschedule;  // optional
  char*defaulthomeview;  // optional
  char*defaulthomeviewtargetid;  // optional
  voxgig_value*deletionrequestedat;  // optional
  bool feedenabled;  // optional
  double fiscalyearstartmonth;  // optional
  bool generatedupdatesenabled;  // optional
  char*gitbranchformat;  // optional
  bool gitlinkbackdescriptionsenabled;  // optional
  bool gitlinkbackmessagesenabled;  // optional
  bool gitpubliclinkbackmessagesenabled;  // optional
  bool hipaacomplianceenabled;  // optional
  char*id;  // optional
  double initiativeupdatereminderfrequencyinweeks;  // optional
  char*initiativeupdateremindersday;  // optional
  double initiativeupdateremindershour;  // optional
  bool linearagentenabled;  // optional
  voxgig_value*linearagentsettings;  // optional
  char*logourl;  // optional
  char*name;  // optional
  double perioduploadvolume;  // optional
  char*previousurlkeys;  // optional
  double projectupdatereminderfrequencyinweeks;  // optional
  char*projectupdateremindersday;  // optional
  double projectupdateremindershour;  // optional
  char*pullrequestissuemode;  // optional
  bool pullrequesttourenabled;  // optional
  char*releasechannel;  // optional
  bool releasesenabled;  // optional
  bool restrictagentinvocationtomembers;  // optional
  bool roadmapenabled;  // optional
  bool samlenabled;  // optional
  voxgig_value*samlsettings;  // optional
  bool scimenabled;  // optional
  voxgig_value*scimsettings;  // optional
  voxgig_value*securitysettings;  // optional
  bool slackautocreateprojectchannel;  // optional
  voxgig_value*slackprojectchannelintegration;  // optional
  char*slackprojectchannelprefix;  // optional
  bool slackprojectchannelsenabled;  // optional
  voxgig_value*subscription;  // optional
  voxgig_value*themesettings;  // optional
  voxgig_value*trialendsat;  // optional
  voxgig_value*trialstartsat;  // optional
  voxgig_value*updatedat;  // optional
  char*urlkey;  // optional
  int64_t usercount;  // optional
  double workingdays;  // optional
} OrganizationUpdateData;

// OrganizationRemoveMatch is the typed request payload for Organization.remove.
typedef struct {
  bool agentautomationenabled;  // optional
  bool aiaddonenabled;  // optional
  bool aidiscussionsummariesenabled;  // optional
  voxgig_value*aiproviderconfiguration;  // optional
  bool aitelemetryenabled;  // optional
  bool aithreadsummariesenabled;  // optional
  char*allowedfileuploadcontenttypes;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*authsettings;  // optional
  bool codeintelligenceenabled;  // optional
  char*codeintelligencerepository;  // optional
  bool codingagentenabled;  // optional
  voxgig_value*codingagentsettings;  // optional
  voxgig_value*createdat;  // optional
  int64_t createdissuecount;  // optional
  int64_t customercount;  // optional
  voxgig_value*customersconfiguration;  // optional
  bool customersenabled;  // optional
  char*defaultfeedsummaryschedule;  // optional
  char*defaulthomeview;  // optional
  char*defaulthomeviewtargetid;  // optional
  voxgig_value*deletionrequestedat;  // optional
  bool feedenabled;  // optional
  double fiscalyearstartmonth;  // optional
  bool generatedupdatesenabled;  // optional
  char*gitbranchformat;  // optional
  bool gitlinkbackdescriptionsenabled;  // optional
  bool gitlinkbackmessagesenabled;  // optional
  bool gitpubliclinkbackmessagesenabled;  // optional
  bool hipaacomplianceenabled;  // optional
  char*id;
  double initiativeupdatereminderfrequencyinweeks;  // optional
  char*initiativeupdateremindersday;  // optional
  double initiativeupdateremindershour;  // optional
  bool linearagentenabled;  // optional
  voxgig_value*linearagentsettings;  // optional
  char*logourl;  // optional
  char*name;  // optional
  double perioduploadvolume;  // optional
  char*previousurlkeys;  // optional
  double projectupdatereminderfrequencyinweeks;  // optional
  char*projectupdateremindersday;  // optional
  double projectupdateremindershour;  // optional
  char*pullrequestissuemode;  // optional
  bool pullrequesttourenabled;  // optional
  char*releasechannel;  // optional
  bool releasesenabled;  // optional
  bool restrictagentinvocationtomembers;  // optional
  bool roadmapenabled;  // optional
  bool samlenabled;  // optional
  voxgig_value*samlsettings;  // optional
  bool scimenabled;  // optional
  voxgig_value*scimsettings;  // optional
  voxgig_value*securitysettings;  // optional
  bool slackautocreateprojectchannel;  // optional
  voxgig_value*slackprojectchannelintegration;  // optional
  char*slackprojectchannelprefix;  // optional
  bool slackprojectchannelsenabled;  // optional
  voxgig_value*subscription;  // optional
  voxgig_value*themesettings;  // optional
  voxgig_value*trialendsat;  // optional
  voxgig_value*trialstartsat;  // optional
  voxgig_value*updatedat;  // optional
  char*urlkey;  // optional
  int64_t usercount;  // optional
  double workingdays;  // optional
} OrganizationRemoveMatch;

// OrganizationDomain is the typed data model for the organization_domain entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*authtype;
  bool claimed;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  bool disableorganizationcreation;  // optional
  char*id;
  voxgig_value*identityprovider;  // optional
  char*name;
  voxgig_value*updatedat;
  char*verificationemail;  // optional
  bool verified;
} OrganizationDomain;

// OrganizationDomainCreateData is the typed request payload for OrganizationDomain.create.
typedef struct {
  bool trigger_email_verification;  // optional
  voxgig_value*archivedat;  // optional
  char*authtype;
  bool claimed;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  bool disableorganizationcreation;  // optional
  char*id;
  voxgig_value*identityprovider;  // optional
  char*name;
  voxgig_value*updatedat;
  char*verificationemail;  // optional
  bool verified;
} OrganizationDomainCreateData;

// OrganizationDomainUpdateData is the typed request payload for OrganizationDomain.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*authtype;  // optional
  bool claimed;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  bool disableorganizationcreation;  // optional
  voxgig_value*identityprovider;  // optional
  char*name;  // optional
  voxgig_value*updatedat;  // optional
  char*verificationemail;  // optional
  bool verified;  // optional
} OrganizationDomainUpdateData;

// OrganizationDomainRemoveMatch is the typed request payload for OrganizationDomain.remove.
typedef struct {
  char*id;
} OrganizationDomainRemoveMatch;

// OrganizationInvite is the typed data model for the organization_invite entity.
typedef struct {
  voxgig_value*acceptedat;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*email;
  voxgig_value*expiresat;  // optional
  bool external;
  char*id;
  voxgig_value*invitee;  // optional
  voxgig_value*inviter;  // optional
  voxgig_value*metadata;  // optional
  voxgig_value*organization;  // optional
  char*role;
  voxgig_value*updatedat;
} OrganizationInvite;

// OrganizationInviteLoadMatch is the typed request payload for OrganizationInvite.load.
typedef struct {
  char*id;
} OrganizationInviteLoadMatch;

// OrganizationInviteListMatch is the typed request payload for OrganizationInvite.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} OrganizationInviteListMatch;

// OrganizationInviteCreateData is the typed request payload for OrganizationInvite.create.
typedef struct {
  voxgig_value*acceptedat;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*email;
  voxgig_value*expiresat;  // optional
  bool external;
  char*id;
  voxgig_value*invitee;  // optional
  voxgig_value*inviter;  // optional
  voxgig_value*metadata;  // optional
  voxgig_value*organization;  // optional
  char*role;
  voxgig_value*updatedat;
} OrganizationInviteCreateData;

// OrganizationInviteUpdateData is the typed request payload for OrganizationInvite.update.
typedef struct {
  char*id;
  voxgig_value*acceptedat;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  char*email;  // optional
  voxgig_value*expiresat;  // optional
  bool external;  // optional
  voxgig_value*invitee;  // optional
  voxgig_value*inviter;  // optional
  voxgig_value*metadata;  // optional
  voxgig_value*organization;  // optional
  char*role;  // optional
  voxgig_value*updatedat;  // optional
} OrganizationInviteUpdateData;

// OrganizationInviteRemoveMatch is the typed request payload for OrganizationInvite.remove.
typedef struct {
  char*id;
} OrganizationInviteRemoveMatch;

// OrganizationMeta is the typed data model for the organization_meta entity.
typedef struct {
  char*allowedauthservices;
  char*region;
} OrganizationMeta;

// OrganizationMetaLoadMatch is the typed request payload for OrganizationMeta.load.
typedef struct {
  char*url_key;
} OrganizationMetaLoadMatch;

// PasskeyLoginStartResponse is the typed data model for the passkey_login_start_response entity.
typedef struct {
  voxgig_value*options;
  bool success;
} PasskeyLoginStartResponse;

// PasskeyLoginStartResponseUpdateData is the typed request payload for PasskeyLoginStartResponse.update.
typedef struct {
  char*auth_id;
  voxgig_value*options;  // optional
  bool success;  // optional
} PasskeyLoginStartResponseUpdateData;

// Project is the typed data model for the project entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*color;
  voxgig_value*completedat;  // optional
  double completedissuecounthistory;
  double completedscopehistory;
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*convertedfromissue;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*currentprogress;
  char*description;
  voxgig_value*documentcontent;  // optional
  voxgig_value*favorite;  // optional
  char*frequencyresolution;
  char*health;  // optional
  voxgig_value*healthupdatedat;  // optional
  char*icon;  // optional
  char*id;
  char*identifier;  // optional
  double inprogressscopehistory;
  voxgig_value*integrationssettings;  // optional
  double issuecounthistory;
  char*labelids;
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*lastupdate;  // optional
  voxgig_value*lead;  // optional
  voxgig_value*leadteam;  // optional
  char*microsoftteamschannelid;  // optional
  char*name;
  char*previousidentifiers;
  int64_t priority;
  char*prioritylabel;
  double prioritysortorder;
  double progress;
  voxgig_value*progresshistory;
  voxgig_value*projectupdatereminderspauseduntilat;  // optional
  int64_t resourcecount;
  double scope;
  double scopehistory;
  char*slackchannelid;  // optional
  char*slugid;
  double sortorder;
  voxgig_value*startdate;  // optional
  char*startdateresolution;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*status;  // optional
  voxgig_value*targetdate;  // optional
  char*targetdateresolution;  // optional
  bool trashed;  // optional
  double updatereminderfrequency;  // optional
  double updatereminderfrequencyinweeks;  // optional
  char*updateremindersday;  // optional
  double updateremindershour;  // optional
  voxgig_value*updatedat;
  char*url;
} Project;

// ProjectLoadMatch is the typed request payload for Project.load.
typedef struct {
  char*id;
} ProjectLoadMatch;

// ProjectListMatch is the typed request payload for Project.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ProjectListMatch;

// ProjectCreateData is the typed request payload for Project.create.
typedef struct {
  char*ai_conversation_id;  // optional
  char*project_draft_id;  // optional
  char*slack_channel_name;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*color;
  voxgig_value*completedat;  // optional
  double completedissuecounthistory;
  double completedscopehistory;
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*convertedfromissue;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*currentprogress;
  char*description;
  voxgig_value*documentcontent;  // optional
  voxgig_value*favorite;  // optional
  char*frequencyresolution;
  char*health;  // optional
  voxgig_value*healthupdatedat;  // optional
  char*icon;  // optional
  char*id;
  char*identifier;  // optional
  double inprogressscopehistory;
  voxgig_value*integrationssettings;  // optional
  double issuecounthistory;
  char*labelids;
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*lastupdate;  // optional
  voxgig_value*lead;  // optional
  voxgig_value*leadteam;  // optional
  char*microsoftteamschannelid;  // optional
  char*name;
  char*previousidentifiers;
  int64_t priority;
  char*prioritylabel;
  double prioritysortorder;
  double progress;
  voxgig_value*progresshistory;
  voxgig_value*projectupdatereminderspauseduntilat;  // optional
  int64_t resourcecount;
  double scope;
  double scopehistory;
  char*slackchannelid;  // optional
  char*slugid;
  double sortorder;
  voxgig_value*startdate;  // optional
  char*startdateresolution;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*status;  // optional
  voxgig_value*targetdate;  // optional
  char*targetdateresolution;  // optional
  bool trashed;  // optional
  double updatereminderfrequency;  // optional
  double updatereminderfrequencyinweeks;  // optional
  char*updateremindersday;  // optional
  double updateremindershour;  // optional
  voxgig_value*updatedat;
  char*url;
} ProjectCreateData;

// ProjectUpdateData is the typed request payload for Project.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*color;  // optional
  voxgig_value*completedat;  // optional
  double completedissuecounthistory;  // optional
  double completedscopehistory;  // optional
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*convertedfromissue;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*currentprogress;  // optional
  char*description;  // optional
  voxgig_value*documentcontent;  // optional
  voxgig_value*favorite;  // optional
  char*frequencyresolution;  // optional
  char*health;  // optional
  voxgig_value*healthupdatedat;  // optional
  char*icon;  // optional
  char*identifier;  // optional
  double inprogressscopehistory;  // optional
  voxgig_value*integrationssettings;  // optional
  double issuecounthistory;  // optional
  char*labelids;  // optional
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*lastupdate;  // optional
  voxgig_value*lead;  // optional
  voxgig_value*leadteam;  // optional
  char*microsoftteamschannelid;  // optional
  char*name;  // optional
  char*previousidentifiers;  // optional
  int64_t priority;  // optional
  char*prioritylabel;  // optional
  double prioritysortorder;  // optional
  double progress;  // optional
  voxgig_value*progresshistory;  // optional
  voxgig_value*projectupdatereminderspauseduntilat;  // optional
  int64_t resourcecount;  // optional
  double scope;  // optional
  double scopehistory;  // optional
  char*slackchannelid;  // optional
  char*slugid;  // optional
  double sortorder;  // optional
  voxgig_value*startdate;  // optional
  char*startdateresolution;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*status;  // optional
  voxgig_value*targetdate;  // optional
  char*targetdateresolution;  // optional
  bool trashed;  // optional
  double updatereminderfrequency;  // optional
  double updatereminderfrequencyinweeks;  // optional
  char*updateremindersday;  // optional
  double updateremindershour;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} ProjectUpdateData;

// ProjectRemoveMatch is the typed request payload for Project.remove.
typedef struct {
  char*id;
} ProjectRemoveMatch;

// ProjectLabel is the typed data model for the project_label entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  bool isgroup;
  voxgig_value*lastappliedat;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} ProjectLabel;

// ProjectLabelLoadMatch is the typed request payload for ProjectLabel.load.
typedef struct {
  char*id;
} ProjectLabelLoadMatch;

// ProjectLabelListMatch is the typed request payload for ProjectLabel.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ProjectLabelListMatch;

// ProjectLabelCreateData is the typed request payload for ProjectLabel.create.
typedef struct {
  bool replace_team_label;  // optional
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  bool isgroup;
  voxgig_value*lastappliedat;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
} ProjectLabelCreateData;

// ProjectLabelUpdateData is the typed request payload for ProjectLabel.update.
typedef struct {
  char*id;
  bool replace_team_label;  // optional
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  voxgig_value*inheritedfrom;  // optional
  bool isgroup;  // optional
  voxgig_value*lastappliedat;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*retiredat;  // optional
  voxgig_value*retiredby;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
} ProjectLabelUpdateData;

// ProjectLabelRemoveMatch is the typed request payload for ProjectLabel.remove.
typedef struct {
  char*id;
} ProjectLabelRemoveMatch;

// ProjectMilestone is the typed data model for the project_milestone entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*currentprogress;
  char*description;  // optional
  char*descriptionstate;  // optional
  voxgig_value*documentcontent;  // optional
  char*id;
  char*name;
  double progress;
  voxgig_value*progresshistory;
  voxgig_value*project;  // optional
  double sortorder;
  char*status;
  voxgig_value*targetdate;  // optional
  voxgig_value*updatedat;
} ProjectMilestone;

// ProjectMilestoneLoadMatch is the typed request payload for ProjectMilestone.load.
typedef struct {
  char*id;
} ProjectMilestoneLoadMatch;

// ProjectMilestoneListMatch is the typed request payload for ProjectMilestone.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ProjectMilestoneListMatch;

// ProjectMilestoneCreateData is the typed request payload for ProjectMilestone.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*currentprogress;
  char*description;  // optional
  char*descriptionstate;  // optional
  voxgig_value*documentcontent;  // optional
  char*id;
  char*name;
  double progress;
  voxgig_value*progresshistory;
  voxgig_value*project;  // optional
  double sortorder;
  char*status;
  voxgig_value*targetdate;  // optional
  voxgig_value*updatedat;
} ProjectMilestoneCreateData;

// ProjectMilestoneUpdateData is the typed request payload for ProjectMilestone.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*currentprogress;  // optional
  char*description;  // optional
  char*descriptionstate;  // optional
  voxgig_value*documentcontent;  // optional
  char*name;  // optional
  double progress;  // optional
  voxgig_value*progresshistory;  // optional
  voxgig_value*project;  // optional
  double sortorder;  // optional
  char*status;  // optional
  voxgig_value*targetdate;  // optional
  voxgig_value*updatedat;  // optional
} ProjectMilestoneUpdateData;

// ProjectMilestoneRemoveMatch is the typed request payload for ProjectMilestone.remove.
typedef struct {
  char*id;
} ProjectMilestoneRemoveMatch;

// ProjectMilestoneMoveProjectTeam is the typed data model for the project_milestone_move_project_team entity.
typedef struct {
  char*id;  // optional
  char*projectid;
  char*teamids;
} ProjectMilestoneMoveProjectTeam;

// ProjectMilestoneMoveProjectTeamUpdateData is the typed request payload for ProjectMilestoneMoveProjectTeam.update.
typedef struct {
  char*id;
  char*projectid;  // optional
  char*teamids;  // optional
} ProjectMilestoneMoveProjectTeamUpdateData;

// ProjectRelation is the typed data model for the project_relation entity.
typedef struct {
  char*anchortype;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*project;  // optional
  voxgig_value*projectmilestone;  // optional
  char*relatedanchortype;
  voxgig_value*relatedproject;  // optional
  voxgig_value*relatedprojectmilestone;  // optional
  char*type;
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} ProjectRelation;

// ProjectRelationLoadMatch is the typed request payload for ProjectRelation.load.
typedef struct {
  char*id;
} ProjectRelationLoadMatch;

// ProjectRelationListMatch is the typed request payload for ProjectRelation.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ProjectRelationListMatch;

// ProjectRelationCreateData is the typed request payload for ProjectRelation.create.
typedef struct {
  char*anchortype;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*project;  // optional
  voxgig_value*projectmilestone;  // optional
  char*relatedanchortype;
  voxgig_value*relatedproject;  // optional
  voxgig_value*relatedprojectmilestone;  // optional
  char*type;
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} ProjectRelationCreateData;

// ProjectRelationUpdateData is the typed request payload for ProjectRelation.update.
typedef struct {
  char*id;
  char*anchortype;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*project;  // optional
  voxgig_value*projectmilestone;  // optional
  char*relatedanchortype;  // optional
  voxgig_value*relatedproject;  // optional
  voxgig_value*relatedprojectmilestone;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*user;  // optional
} ProjectRelationUpdateData;

// ProjectRelationRemoveMatch is the typed request payload for ProjectRelation.remove.
typedef struct {
  char*id;
} ProjectRelationRemoveMatch;

// ProjectSearchResult is the typed data model for the project_search_result entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*color;
  voxgig_value*completedat;  // optional
  double completedissuecounthistory;
  double completedscopehistory;
  char*content;  // optional
  char*contentstate;  // optional
  voxgig_value*convertedfromissue;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*currentprogress;
  char*description;
  voxgig_value*documentcontent;  // optional
  voxgig_value*favorite;  // optional
  char*frequencyresolution;
  char*health;  // optional
  voxgig_value*healthupdatedat;  // optional
  char*icon;  // optional
  char*id;
  char*identifier;  // optional
  double inprogressscopehistory;
  voxgig_value*integrationssettings;  // optional
  double issuecounthistory;
  char*labelids;
  voxgig_value*lastappliedtemplate;  // optional
  voxgig_value*lastupdate;  // optional
  voxgig_value*lead;  // optional
  voxgig_value*leadteam;  // optional
  voxgig_value*metadata;
  char*microsoftteamschannelid;  // optional
  char*name;
  char*previousidentifiers;
  int64_t priority;
  char*prioritylabel;
  double prioritysortorder;
  double progress;
  voxgig_value*progresshistory;
  voxgig_value*projectupdatereminderspauseduntilat;  // optional
  int64_t resourcecount;
  double scope;
  double scopehistory;
  char*slackchannelid;  // optional
  char*slugid;
  double sortorder;
  voxgig_value*startdate;  // optional
  char*startdateresolution;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*status;  // optional
  voxgig_value*targetdate;  // optional
  char*targetdateresolution;  // optional
  bool trashed;  // optional
  double updatereminderfrequency;  // optional
  double updatereminderfrequencyinweeks;  // optional
  char*updateremindersday;  // optional
  double updateremindershour;  // optional
  voxgig_value*updatedat;
  char*url;
} ProjectSearchResult;

// ProjectSearchResultListMatch is the typed request payload for ProjectSearchResult.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  bool include_comment;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
  char*team_id;  // optional
  char*term;
} ProjectSearchResultListMatch;

// ProjectStatus is the typed data model for the project_status entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*id;
  bool indefinite;
  voxgig_value*inheritedfrom;  // optional
  char*name;
  double position;
  voxgig_value*team;  // optional
  char*type;
  voxgig_value*updatedat;
} ProjectStatus;

// ProjectStatusLoadMatch is the typed request payload for ProjectStatus.load.
typedef struct {
  char*id;
} ProjectStatusLoadMatch;

// ProjectStatusListMatch is the typed request payload for ProjectStatus.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ProjectStatusListMatch;

// ProjectStatusCreateData is the typed request payload for ProjectStatus.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*id;
  bool indefinite;
  voxgig_value*inheritedfrom;  // optional
  char*name;
  double position;
  voxgig_value*team;  // optional
  char*type;
  voxgig_value*updatedat;
} ProjectStatusCreateData;

// ProjectStatusUpdateData is the typed request payload for ProjectStatus.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  char*description;  // optional
  bool indefinite;  // optional
  voxgig_value*inheritedfrom;  // optional
  char*name;  // optional
  double position;  // optional
  voxgig_value*team;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
} ProjectStatusUpdateData;

// ProjectUpdate is the typed data model for the project_update entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*body;
  char*bodydata;
  int64_t commentcount;
  voxgig_value*createdat;
  voxgig_value*diff;  // optional
  char*diffmarkdown;  // optional
  voxgig_value*editedat;  // optional
  char*health;
  char*id;
  voxgig_value*infosnapshot;  // optional
  bool isdiffhidden;
  bool isstale;
  voxgig_value*project;  // optional
  voxgig_value*reactiondata;
  char*shortsummary;  // optional
  char*slugid;
  voxgig_value*updatedat;
  char*url;
  voxgig_value*user;  // optional
} ProjectUpdate;

// ProjectUpdateLoadMatch is the typed request payload for ProjectUpdate.load.
typedef struct {
  char*id;
  char*project_id;  // optional
} ProjectUpdateLoadMatch;

// ProjectUpdateListMatch is the typed request payload for ProjectUpdate.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ProjectUpdateListMatch;

// ProjectUpdateCreateData is the typed request payload for ProjectUpdate.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*body;
  char*bodydata;
  int64_t commentcount;
  voxgig_value*createdat;
  voxgig_value*diff;  // optional
  char*diffmarkdown;  // optional
  voxgig_value*editedat;  // optional
  char*health;
  char*id;
  voxgig_value*infosnapshot;  // optional
  bool isdiffhidden;
  bool isstale;
  voxgig_value*project;  // optional
  voxgig_value*reactiondata;
  char*shortsummary;  // optional
  char*slugid;
  voxgig_value*updatedat;
  char*url;
  voxgig_value*user;  // optional
} ProjectUpdateCreateData;

// ProjectUpdateUpdateData is the typed request payload for ProjectUpdate.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*body;  // optional
  char*bodydata;  // optional
  int64_t commentcount;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*diff;  // optional
  char*diffmarkdown;  // optional
  voxgig_value*editedat;  // optional
  char*health;  // optional
  voxgig_value*infosnapshot;  // optional
  bool isdiffhidden;  // optional
  bool isstale;  // optional
  voxgig_value*project;  // optional
  voxgig_value*reactiondata;  // optional
  char*shortsummary;  // optional
  char*slugid;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
  voxgig_value*user;  // optional
} ProjectUpdateUpdateData;

// ProjectUpdateRemoveMatch is the typed request payload for ProjectUpdate.remove.
typedef struct {
  char*id;
} ProjectUpdateRemoveMatch;

// PushSubscription is the typed data model for the push_subscription entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*updatedat;
} PushSubscription;

// PushSubscriptionCreateData is the typed request payload for PushSubscription.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*updatedat;
} PushSubscriptionCreateData;

// PushSubscriptionRemoveMatch is the typed request payload for PushSubscription.remove.
typedef struct {
  char*id;
} PushSubscriptionRemoveMatch;

// Reaction is the typed data model for the reaction entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*comment;  // optional
  voxgig_value*createdat;
  char*emoji;
  voxgig_value*externaluser;  // optional
  char*id;
  voxgig_value*initiativeupdate;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*post;  // optional
  voxgig_value*projectupdate;  // optional
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} Reaction;

// ReactionCreateData is the typed request payload for Reaction.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*comment;  // optional
  voxgig_value*createdat;
  char*emoji;
  voxgig_value*externaluser;  // optional
  char*id;
  voxgig_value*initiativeupdate;  // optional
  voxgig_value*issue;  // optional
  voxgig_value*post;  // optional
  voxgig_value*projectupdate;  // optional
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} ReactionCreateData;

// ReactionRemoveMatch is the typed request payload for Reaction.remove.
typedef struct {
  char*id;
} ReactionRemoveMatch;

// Release is the typed data model for the release entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*commitsha;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*currentprogress;
  char*description;  // optional
  char*id;
  int64_t issuecount;
  char*name;
  voxgig_value*pipeline;  // optional
  voxgig_value*progresshistory;
  voxgig_value*releasenote;  // optional
  char*slugid;
  voxgig_value*stage;  // optional
  voxgig_value*startdate;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*targetdate;  // optional
  bool trashed;  // optional
  voxgig_value*updatedat;
  char*url;
  char*version;  // optional
} Release;

// ReleaseLoadMatch is the typed request payload for Release.load.
typedef struct {
  char*id;
} ReleaseLoadMatch;

// ReleaseListMatch is the typed request payload for Release.list.
typedef struct {
  int64_t first;  // optional
  char*term;  // optional
  char*after;  // optional
  char*before;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ReleaseListMatch;

// ReleaseCreateData is the typed request payload for Release.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*commitsha;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  voxgig_value*currentprogress;
  char*description;  // optional
  char*id;
  int64_t issuecount;
  char*name;
  voxgig_value*pipeline;  // optional
  voxgig_value*progresshistory;
  voxgig_value*releasenote;  // optional
  char*slugid;
  voxgig_value*stage;  // optional
  voxgig_value*startdate;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*targetdate;  // optional
  bool trashed;  // optional
  voxgig_value*updatedat;
  char*url;
  char*version;  // optional
} ReleaseCreateData;

// ReleaseUpdateData is the typed request payload for Release.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*autoarchivedat;  // optional
  voxgig_value*canceledat;  // optional
  char*commitsha;  // optional
  voxgig_value*completedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  voxgig_value*currentprogress;  // optional
  char*description;  // optional
  int64_t issuecount;  // optional
  char*name;  // optional
  voxgig_value*pipeline;  // optional
  voxgig_value*progresshistory;  // optional
  voxgig_value*releasenote;  // optional
  char*slugid;  // optional
  voxgig_value*stage;  // optional
  voxgig_value*startdate;  // optional
  voxgig_value*startedat;  // optional
  voxgig_value*targetdate;  // optional
  bool trashed;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
  char*version;  // optional
} ReleaseUpdateData;

// ReleaseRemoveMatch is the typed request payload for Release.remove.
typedef struct {
  char*id;
} ReleaseRemoveMatch;

// ReleaseNote is the typed data model for the release_note entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*documentcontent;  // optional
  voxgig_value*firstrelease;  // optional
  char*generationstatus;  // optional
  char*id;
  voxgig_value*lastrelease;  // optional
  voxgig_value*pipeline;  // optional
  int64_t releasecount;
  char*slugid;
  char*title;  // optional
  voxgig_value*updatedat;
  char*url;
} ReleaseNote;

// ReleaseNoteLoadMatch is the typed request payload for ReleaseNote.load.
typedef struct {
  char*id;
} ReleaseNoteLoadMatch;

// ReleaseNoteListMatch is the typed request payload for ReleaseNote.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ReleaseNoteListMatch;

// ReleaseNoteCreateData is the typed request payload for ReleaseNote.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*documentcontent;  // optional
  voxgig_value*firstrelease;  // optional
  char*generationstatus;  // optional
  char*id;
  voxgig_value*lastrelease;  // optional
  voxgig_value*pipeline;  // optional
  int64_t releasecount;
  char*slugid;
  char*title;  // optional
  voxgig_value*updatedat;
  char*url;
} ReleaseNoteCreateData;

// ReleaseNoteUpdateData is the typed request payload for ReleaseNote.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*documentcontent;  // optional
  voxgig_value*firstrelease;  // optional
  char*generationstatus;  // optional
  voxgig_value*lastrelease;  // optional
  voxgig_value*pipeline;  // optional
  int64_t releasecount;  // optional
  char*slugid;  // optional
  char*title;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} ReleaseNoteUpdateData;

// ReleaseNoteRemoveMatch is the typed request payload for ReleaseNote.remove.
typedef struct {
  char*id;
} ReleaseNoteRemoveMatch;

// ReleasePipeline is the typed data model for the release_pipeline entity.
typedef struct {
  int64_t approximatereleasecount;
  voxgig_value*archivedat;  // optional
  bool autogeneratereleasenotesoncompletion;
  voxgig_value*createdat;
  char*id;
  char*includepathpatterns;
  bool isproduction;
  voxgig_value*latestreleasenote;  // optional
  char*name;
  voxgig_value*releasenotetemplate;  // optional
  bool rolloverissuesoncompletion;
  char*slugid;
  bool trashed;  // optional
  char*type;
  voxgig_value*updatedat;
  char*url;
} ReleasePipeline;

// ReleasePipelineLoadMatch is the typed request payload for ReleasePipeline.load.
typedef struct {
  char*id;
} ReleasePipelineLoadMatch;

// ReleasePipelineListMatch is the typed request payload for ReleasePipeline.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ReleasePipelineListMatch;

// ReleasePipelineCreateData is the typed request payload for ReleasePipeline.create.
typedef struct {
  int64_t approximatereleasecount;
  voxgig_value*archivedat;  // optional
  bool autogeneratereleasenotesoncompletion;
  voxgig_value*createdat;
  char*id;
  char*includepathpatterns;
  bool isproduction;
  voxgig_value*latestreleasenote;  // optional
  char*name;
  voxgig_value*releasenotetemplate;  // optional
  bool rolloverissuesoncompletion;
  char*slugid;
  bool trashed;  // optional
  char*type;
  voxgig_value*updatedat;
  char*url;
} ReleasePipelineCreateData;

// ReleasePipelineUpdateData is the typed request payload for ReleasePipeline.update.
typedef struct {
  char*id;
  int64_t approximatereleasecount;  // optional
  voxgig_value*archivedat;  // optional
  bool autogeneratereleasenotesoncompletion;  // optional
  voxgig_value*createdat;  // optional
  char*includepathpatterns;  // optional
  bool isproduction;  // optional
  voxgig_value*latestreleasenote;  // optional
  char*name;  // optional
  voxgig_value*releasenotetemplate;  // optional
  bool rolloverissuesoncompletion;  // optional
  char*slugid;  // optional
  bool trashed;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} ReleasePipelineUpdateData;

// ReleasePipelineRemoveMatch is the typed request payload for ReleasePipeline.remove.
typedef struct {
  char*id;
} ReleasePipelineRemoveMatch;

// ReleaseStage is the typed data model for the release_stage entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  bool frozen;
  char*id;
  char*name;
  voxgig_value*pipeline;  // optional
  double position;
  char*type;
  voxgig_value*updatedat;
} ReleaseStage;

// ReleaseStageLoadMatch is the typed request payload for ReleaseStage.load.
typedef struct {
  char*id;
} ReleaseStageLoadMatch;

// ReleaseStageListMatch is the typed request payload for ReleaseStage.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} ReleaseStageListMatch;

// ReleaseStageCreateData is the typed request payload for ReleaseStage.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  bool frozen;
  char*id;
  char*name;
  voxgig_value*pipeline;  // optional
  double position;
  char*type;
  voxgig_value*updatedat;
} ReleaseStageCreateData;

// ReleaseStageUpdateData is the typed request payload for ReleaseStage.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  bool frozen;  // optional
  char*name;  // optional
  voxgig_value*pipeline;  // optional
  double position;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
} ReleaseStageUpdateData;

// Roadmap is the typed data model for the roadmap entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*id;
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*owner;  // optional
  char*slugid;
  double sortorder;
  voxgig_value*updatedat;
  char*url;
} Roadmap;

// RoadmapLoadMatch is the typed request payload for Roadmap.load.
typedef struct {
  char*id;
} RoadmapLoadMatch;

// RoadmapListMatch is the typed request payload for Roadmap.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} RoadmapListMatch;

// RoadmapCreateData is the typed request payload for Roadmap.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*id;
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*owner;  // optional
  char*slugid;
  double sortorder;
  voxgig_value*updatedat;
  char*url;
} RoadmapCreateData;

// RoadmapUpdateData is the typed request payload for Roadmap.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*owner;  // optional
  char*slugid;  // optional
  double sortorder;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} RoadmapUpdateData;

// RoadmapRemoveMatch is the typed request payload for Roadmap.remove.
typedef struct {
  char*id;
} RoadmapRemoveMatch;

// RoadmapToProject is the typed data model for the roadmap_to_project entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*project;  // optional
  voxgig_value*roadmap;  // optional
  char*sortorder;
  voxgig_value*updatedat;
} RoadmapToProject;

// RoadmapToProjectLoadMatch is the typed request payload for RoadmapToProject.load.
typedef struct {
  char*id;
} RoadmapToProjectLoadMatch;

// RoadmapToProjectListMatch is the typed request payload for RoadmapToProject.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} RoadmapToProjectListMatch;

// RoadmapToProjectCreateData is the typed request payload for RoadmapToProject.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*project;  // optional
  voxgig_value*roadmap;  // optional
  char*sortorder;
  voxgig_value*updatedat;
} RoadmapToProjectCreateData;

// RoadmapToProjectUpdateData is the typed request payload for RoadmapToProject.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*project;  // optional
  voxgig_value*roadmap;  // optional
  char*sortorder;  // optional
  voxgig_value*updatedat;  // optional
} RoadmapToProjectUpdateData;

// RoadmapToProjectRemoveMatch is the typed request payload for RoadmapToProject.remove.
typedef struct {
  char*id;
} RoadmapToProjectRemoveMatch;

// SlaConfiguration is the typed data model for the sla_configuration entity.
typedef struct {
  voxgig_value*conditions;
  char*id;
  char*name;
  bool removessla;
  double sla;  // optional
  char*slatype;  // optional
  char*startmode;  // optional
} SlaConfiguration;

// SlaConfigurationListMatch is the typed request payload for SlaConfiguration.list.
typedef struct {
  char*team_id;
} SlaConfigurationListMatch;

// SsoUrlFromEmailResponse is the typed data model for the sso_url_from_email_response entity.
typedef struct {
  char*samlssourl;
  bool success;
} SsoUrlFromEmailResponse;

// SsoUrlFromEmailResponseLoadMatch is the typed request payload for SsoUrlFromEmailResponse.load.
typedef struct {
  char*email;
  bool is_desktop;  // optional
  voxgig_value*type;
} SsoUrlFromEmailResponseLoadMatch;

// Team is the typed data model for the team entity.
typedef struct {
  voxgig_value*activecycle;  // optional
  bool aidiscussionsummariesenabled;
  bool aithreadsummariesenabled;
  bool allmemberscanjoin;  // optional
  voxgig_value*archivedat;  // optional
  double autoarchiveperiod;
  bool autoclosechildissues;  // optional
  bool autocloseparentissues;  // optional
  double autocloseperiod;  // optional
  char*autoclosestateid;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*currentprogress;
  char*cyclecalenderurl;
  double cyclecooldowntime;
  double cycleduration;
  bool cycleissueautoassigncompleted;
  bool cycleissueautoassignstarted;
  bool cyclelocktoactive;
  double cyclestartday;
  bool cyclesenabled;
  double defaultissueestimate;
  voxgig_value*defaultissuestate;  // optional
  voxgig_value*defaultprojecttemplate;  // optional
  voxgig_value*defaulttemplateformembers;  // optional
  voxgig_value*defaulttemplatefornonmembers;  // optional
  char*description;  // optional
  char*displayname;
  bool groupissuehistory;
  char*icon;  // optional
  char*id;
  bool inheritissueestimation;
  bool inheritprojectstatuses;
  bool inheritslackautocreateprojectchannel;
  bool inheritworkflowstatuses;
  bool initiativesenabled;
  voxgig_value*integrationssettings;  // optional
  int64_t issuecount;
  bool issueestimationallowzero;
  bool issueestimationextended;
  char*issueestimationtype;
  bool joinbydefault;  // optional
  char*key;
  int64_t ledinitiativecount;
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*progresshistory;
  bool requireprioritytoleavetriage;
  voxgig_value*restrictedby;  // optional
  char*restrictedbyid;  // optional
  voxgig_value*retiredat;  // optional
  char*scimgroupname;  // optional
  bool scimmanaged;
  voxgig_value*securitysettings;
  char*setissuesortorderonstatechange;
  bool slackautocreateprojectchannel;  // optional
  char*timezone;
  bool triageenabled;
  voxgig_value*triageissuestate;  // optional
  voxgig_value*triageresponsibility;  // optional
  double upcomingcyclecount;
  voxgig_value*updatedat;
  char*visibility;
} Team;

// TeamLoadMatch is the typed request payload for Team.load.
typedef struct {
  char*id;
} TeamLoadMatch;

// TeamListMatch is the typed request payload for Team.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} TeamListMatch;

// TeamCreateData is the typed request payload for Team.create.
typedef struct {
  char*copy_settings_from_team_id;  // optional
  voxgig_value*activecycle;  // optional
  bool aidiscussionsummariesenabled;
  bool aithreadsummariesenabled;
  bool allmemberscanjoin;  // optional
  voxgig_value*archivedat;  // optional
  double autoarchiveperiod;
  bool autoclosechildissues;  // optional
  bool autocloseparentissues;  // optional
  double autocloseperiod;  // optional
  char*autoclosestateid;  // optional
  char*color;  // optional
  voxgig_value*createdat;
  voxgig_value*currentprogress;
  char*cyclecalenderurl;
  double cyclecooldowntime;
  double cycleduration;
  bool cycleissueautoassigncompleted;
  bool cycleissueautoassignstarted;
  bool cyclelocktoactive;
  double cyclestartday;
  bool cyclesenabled;
  double defaultissueestimate;
  voxgig_value*defaultissuestate;  // optional
  voxgig_value*defaultprojecttemplate;  // optional
  voxgig_value*defaulttemplateformembers;  // optional
  voxgig_value*defaulttemplatefornonmembers;  // optional
  char*description;  // optional
  char*displayname;
  bool groupissuehistory;
  char*icon;  // optional
  char*id;
  bool inheritissueestimation;
  bool inheritprojectstatuses;
  bool inheritslackautocreateprojectchannel;
  bool inheritworkflowstatuses;
  bool initiativesenabled;
  voxgig_value*integrationssettings;  // optional
  int64_t issuecount;
  bool issueestimationallowzero;
  bool issueestimationextended;
  char*issueestimationtype;
  bool joinbydefault;  // optional
  char*key;
  int64_t ledinitiativecount;
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*progresshistory;
  bool requireprioritytoleavetriage;
  voxgig_value*restrictedby;  // optional
  char*restrictedbyid;  // optional
  voxgig_value*retiredat;  // optional
  char*scimgroupname;  // optional
  bool scimmanaged;
  voxgig_value*securitysettings;
  char*setissuesortorderonstatechange;
  bool slackautocreateprojectchannel;  // optional
  char*timezone;
  bool triageenabled;
  voxgig_value*triageissuestate;  // optional
  voxgig_value*triageresponsibility;  // optional
  double upcomingcyclecount;
  voxgig_value*updatedat;
  char*visibility;
} TeamCreateData;

// TeamUpdateData is the typed request payload for Team.update.
typedef struct {
  char*id;
  voxgig_value*activecycle;  // optional
  bool aidiscussionsummariesenabled;  // optional
  bool aithreadsummariesenabled;  // optional
  bool allmemberscanjoin;  // optional
  voxgig_value*archivedat;  // optional
  double autoarchiveperiod;  // optional
  bool autoclosechildissues;  // optional
  bool autocloseparentissues;  // optional
  double autocloseperiod;  // optional
  char*autoclosestateid;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*currentprogress;  // optional
  char*cyclecalenderurl;  // optional
  double cyclecooldowntime;  // optional
  double cycleduration;  // optional
  bool cycleissueautoassigncompleted;  // optional
  bool cycleissueautoassignstarted;  // optional
  bool cyclelocktoactive;  // optional
  double cyclestartday;  // optional
  bool cyclesenabled;  // optional
  double defaultissueestimate;  // optional
  voxgig_value*defaultissuestate;  // optional
  voxgig_value*defaultprojecttemplate;  // optional
  voxgig_value*defaulttemplateformembers;  // optional
  voxgig_value*defaulttemplatefornonmembers;  // optional
  char*description;  // optional
  char*displayname;  // optional
  bool groupissuehistory;  // optional
  char*icon;  // optional
  bool inheritissueestimation;  // optional
  bool inheritprojectstatuses;  // optional
  bool inheritslackautocreateprojectchannel;  // optional
  bool inheritworkflowstatuses;  // optional
  bool initiativesenabled;  // optional
  voxgig_value*integrationssettings;  // optional
  int64_t issuecount;  // optional
  bool issueestimationallowzero;  // optional
  bool issueestimationextended;  // optional
  char*issueestimationtype;  // optional
  bool joinbydefault;  // optional
  char*key;  // optional
  int64_t ledinitiativecount;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*parent;  // optional
  voxgig_value*progresshistory;  // optional
  bool requireprioritytoleavetriage;  // optional
  voxgig_value*restrictedby;  // optional
  char*restrictedbyid;  // optional
  voxgig_value*retiredat;  // optional
  char*scimgroupname;  // optional
  bool scimmanaged;  // optional
  voxgig_value*securitysettings;  // optional
  char*setissuesortorderonstatechange;  // optional
  bool slackautocreateprojectchannel;  // optional
  char*timezone;  // optional
  bool triageenabled;  // optional
  voxgig_value*triageissuestate;  // optional
  voxgig_value*triageresponsibility;  // optional
  double upcomingcyclecount;  // optional
  voxgig_value*updatedat;  // optional
  char*visibility;  // optional
} TeamUpdateData;

// TeamRemoveMatch is the typed request payload for Team.remove.
typedef struct {
  char*id;
} TeamRemoveMatch;

// TeamMembership is the typed data model for the team_membership entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  bool owner;
  double sortorder;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} TeamMembership;

// TeamMembershipLoadMatch is the typed request payload for TeamMembership.load.
typedef struct {
  char*id;
} TeamMembershipLoadMatch;

// TeamMembershipListMatch is the typed request payload for TeamMembership.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} TeamMembershipListMatch;

// TeamMembershipCreateData is the typed request payload for TeamMembership.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  bool owner;
  double sortorder;
  voxgig_value*team;  // optional
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} TeamMembershipCreateData;

// TeamMembershipUpdateData is the typed request payload for TeamMembership.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  bool owner;  // optional
  double sortorder;  // optional
  voxgig_value*team;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*user;  // optional
} TeamMembershipUpdateData;

// TeamMembershipRemoveMatch is the typed request payload for TeamMembership.remove.
typedef struct {
  bool also_leave_parent_team;  // optional
  char*id;
} TeamMembershipRemoveMatch;

// Template is the typed data model for the template entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  char*content;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  bool hasformfields;
  char*icon;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  voxgig_value*lastappliedat;  // optional
  voxgig_value*lastupdatedby;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*pipeline;  // optional
  double sortorder;
  voxgig_value*team;  // optional
  voxgig_value*templatedata;
  char*type;
  voxgig_value*updatedat;
} Template;

// TemplateLoadMatch is the typed request payload for Template.load.
typedef struct {
  char*id;
} TemplateLoadMatch;

// TemplateListMatch is the typed request payload for Template.list.
typedef struct {
  char*integration_type;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
} TemplateListMatch;

// TemplateCreateData is the typed request payload for Template.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  char*content;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  char*description;  // optional
  bool hasformfields;
  char*icon;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  voxgig_value*lastappliedat;  // optional
  voxgig_value*lastupdatedby;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*pipeline;  // optional
  double sortorder;
  voxgig_value*team;  // optional
  voxgig_value*templatedata;
  char*type;
  voxgig_value*updatedat;
} TemplateCreateData;

// TemplateUpdateData is the typed request payload for Template.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  char*content;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  char*description;  // optional
  bool hasformfields;  // optional
  char*icon;  // optional
  voxgig_value*inheritedfrom;  // optional
  voxgig_value*lastappliedat;  // optional
  voxgig_value*lastupdatedby;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*pipeline;  // optional
  double sortorder;  // optional
  voxgig_value*team;  // optional
  voxgig_value*templatedata;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
} TemplateUpdateData;

// TemplateRemoveMatch is the typed request payload for Template.remove.
typedef struct {
  char*id;
} TemplateRemoveMatch;

// TimeSchedule is the typed data model for the time_schedule entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*externalid;  // optional
  char*externalurl;  // optional
  char*id;
  voxgig_value*integration;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*updatedat;
} TimeSchedule;

// TimeScheduleLoadMatch is the typed request payload for TimeSchedule.load.
typedef struct {
  char*id;
} TimeScheduleLoadMatch;

// TimeScheduleListMatch is the typed request payload for TimeSchedule.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} TimeScheduleListMatch;

// TimeScheduleCreateData is the typed request payload for TimeSchedule.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*externalid;  // optional
  char*externalurl;  // optional
  char*id;
  voxgig_value*integration;  // optional
  char*name;
  voxgig_value*organization;  // optional
  voxgig_value*updatedat;
} TimeScheduleCreateData;

// TimeScheduleUpdateData is the typed request payload for TimeSchedule.update.
typedef struct {
  char*external_id;  // optional
  char*id;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  char*externalid;  // optional
  char*externalurl;  // optional
  voxgig_value*integration;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  voxgig_value*updatedat;  // optional
} TimeScheduleUpdateData;

// TimeScheduleRemoveMatch is the typed request payload for TimeSchedule.remove.
typedef struct {
  char*id;
} TimeScheduleRemoveMatch;

// TriageResponsibility is the typed data model for the triage_responsibility entity.
typedef struct {
  char*action;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*currentuser;  // optional
  char*id;
  voxgig_value*team;  // optional
  voxgig_value*timeschedule;  // optional
  voxgig_value*updatedat;
} TriageResponsibility;

// TriageResponsibilityLoadMatch is the typed request payload for TriageResponsibility.load.
typedef struct {
  char*id;
} TriageResponsibilityLoadMatch;

// TriageResponsibilityListMatch is the typed request payload for TriageResponsibility.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} TriageResponsibilityListMatch;

// TriageResponsibilityCreateData is the typed request payload for TriageResponsibility.create.
typedef struct {
  char*action;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*currentuser;  // optional
  char*id;
  voxgig_value*team;  // optional
  voxgig_value*timeschedule;  // optional
  voxgig_value*updatedat;
} TriageResponsibilityCreateData;

// TriageResponsibilityUpdateData is the typed request payload for TriageResponsibility.update.
typedef struct {
  char*id;
  char*action;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*currentuser;  // optional
  voxgig_value*team;  // optional
  voxgig_value*timeschedule;  // optional
  voxgig_value*updatedat;  // optional
} TriageResponsibilityUpdateData;

// TriageResponsibilityRemoveMatch is the typed request payload for TriageResponsibility.remove.
typedef struct {
  char*id;
} TriageResponsibilityRemoveMatch;

// UploadFile is the typed data model for the upload_file entity.
typedef struct {
  char*asseturl;
  char*contenttype;
  char*filename;
  voxgig_value*metadata;  // optional
  int64_t size;
  char*uploadurl;
} UploadFile;

// UploadFileCreateData is the typed request payload for UploadFile.create.
typedef struct {
  char*content_type;
  char*filename;
  bool make_public;  // optional
  voxgig_value*meta_data;  // optional
  int64_t size;
  char*asseturl;
  char*contenttype;
  voxgig_value*metadata;  // optional
  char*uploadurl;
} UploadFileCreateData;

// UsageAlert is the typed data model for the usage_alert entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  voxgig_value*metadata;
  voxgig_value*resolvedat;  // optional
  char*type;
  voxgig_value*updatedat;
} UsageAlert;

// UsageAlertLoadMatch is the typed request payload for UsageAlert.load.
typedef struct {
  char*id;
} UsageAlertLoadMatch;

// UsageAlertListMatch is the typed request payload for UsageAlert.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} UsageAlertListMatch;

// User is the typed data model for the user entity.
typedef struct {
  bool active;
  bool admin;
  bool app;
  voxgig_value*archivedat;  // optional
  char*avatarbackgroundcolor;
  char*avatarurl;  // optional
  char*calendarhash;  // optional
  bool canaccessanypublicteam;
  voxgig_value*createdat;
  int64_t createdissuecount;
  char*description;  // optional
  char*disablereason;  // optional
  char*displayname;
  char*email;
  char*githubuserid;  // optional
  bool guest;
  bool hasgithubcodeaccess;
  char*id;
  voxgig_value*identityprovider;  // optional
  char*initials;
  bool isassignable;
  bool isme;
  bool ismentionable;
  voxgig_value*lastseen;  // optional
  char*name;
  voxgig_value*organization;  // optional
  bool owner;
  char*statusemoji;  // optional
  char*statuslabel;  // optional
  voxgig_value*statusuntilat;  // optional
  bool supportsagentsessions;
  char*timezone;  // optional
  char*title;  // optional
  voxgig_value*updatedat;
  char*url;
} User;

// UserLoadMatch is the typed request payload for User.load.
typedef struct {
  char*id;  // optional
} UserLoadMatch;

// UserListMatch is the typed request payload for User.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  bool include_disabled;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} UserListMatch;

// UserCreateData is the typed request payload for User.create.
typedef struct {
  char*code;  // optional
  char*redirect_uri;  // optional
  char*service;  // optional
  bool active;
  bool admin;
  bool app;
  voxgig_value*archivedat;  // optional
  char*avatarbackgroundcolor;
  char*avatarurl;  // optional
  char*calendarhash;  // optional
  bool canaccessanypublicteam;
  voxgig_value*createdat;
  int64_t createdissuecount;
  char*description;  // optional
  char*disablereason;  // optional
  char*displayname;
  char*email;
  char*githubuserid;  // optional
  bool guest;
  bool hasgithubcodeaccess;
  char*id;
  voxgig_value*identityprovider;  // optional
  char*initials;
  bool isassignable;
  bool isme;
  bool ismentionable;
  voxgig_value*lastseen;  // optional
  char*name;
  voxgig_value*organization;  // optional
  bool owner;
  char*statusemoji;  // optional
  char*statuslabel;  // optional
  voxgig_value*statusuntilat;  // optional
  bool supportsagentsessions;
  char*timezone;  // optional
  char*title;  // optional
  voxgig_value*updatedat;
  char*url;
} UserCreateData;

// UserUpdateData is the typed request payload for User.update.
typedef struct {
  char*id;
  bool active;  // optional
  bool admin;  // optional
  bool app;  // optional
  voxgig_value*archivedat;  // optional
  char*avatarbackgroundcolor;  // optional
  char*avatarurl;  // optional
  char*calendarhash;  // optional
  bool canaccessanypublicteam;  // optional
  voxgig_value*createdat;  // optional
  int64_t createdissuecount;  // optional
  char*description;  // optional
  char*disablereason;  // optional
  char*displayname;  // optional
  char*email;  // optional
  char*githubuserid;  // optional
  bool guest;  // optional
  bool hasgithubcodeaccess;  // optional
  voxgig_value*identityprovider;  // optional
  char*initials;  // optional
  bool isassignable;  // optional
  bool isme;  // optional
  bool ismentionable;  // optional
  voxgig_value*lastseen;  // optional
  char*name;  // optional
  voxgig_value*organization;  // optional
  bool owner;  // optional
  char*statusemoji;  // optional
  char*statuslabel;  // optional
  voxgig_value*statusuntilat;  // optional
  bool supportsagentsessions;  // optional
  char*timezone;  // optional
  char*title;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} UserUpdateData;

// UserSetting is the typed data model for the user_setting entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  bool autoassigntoself;
  char*calendarhash;  // optional
  voxgig_value*createdat;
  voxgig_value*feedlastseentime;  // optional
  char*feedsummaryschedule;  // optional
  char*id;
  char*pullrequestmergestrategypreference;  // optional
  bool showfullusernames;
  bool subscribedtochangelog;
  bool subscribedtodpa;
  bool subscribedtoinviteaccepted;
  bool subscribedtoprivacylegalupdates;
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} UserSetting;

// UserSettingLoadMatch is the typed request payload for UserSetting.load.
typedef struct {
  voxgig_value*archivedat;  // optional
  bool autoassigntoself;  // optional
  char*calendarhash;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*feedlastseentime;  // optional
  char*feedsummaryschedule;  // optional
  char*id;
  char*pullrequestmergestrategypreference;  // optional
  bool showfullusernames;  // optional
  bool subscribedtochangelog;  // optional
  bool subscribedtodpa;  // optional
  bool subscribedtoinviteaccepted;  // optional
  bool subscribedtoprivacylegalupdates;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*user;  // optional
} UserSettingLoadMatch;

// UserSettingCreateData is the typed request payload for UserSetting.create.
typedef struct {
  voxgig_value*category;
  voxgig_value*channel;
  bool subscribe;
  voxgig_value*archivedat;  // optional
  bool autoassigntoself;
  char*calendarhash;  // optional
  voxgig_value*createdat;
  voxgig_value*feedlastseentime;  // optional
  char*feedsummaryschedule;  // optional
  char*id;
  char*pullrequestmergestrategypreference;  // optional
  bool showfullusernames;
  bool subscribedtochangelog;
  bool subscribedtodpa;
  bool subscribedtoinviteaccepted;
  bool subscribedtoprivacylegalupdates;
  voxgig_value*updatedat;
  voxgig_value*user;  // optional
} UserSettingCreateData;

// UserSettingUpdateData is the typed request payload for UserSetting.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  bool autoassigntoself;  // optional
  char*calendarhash;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*feedlastseentime;  // optional
  char*feedsummaryschedule;  // optional
  char*pullrequestmergestrategypreference;  // optional
  bool showfullusernames;  // optional
  bool subscribedtochangelog;  // optional
  bool subscribedtodpa;  // optional
  bool subscribedtoinviteaccepted;  // optional
  bool subscribedtoprivacylegalupdates;  // optional
  voxgig_value*updatedat;  // optional
  voxgig_value*user;  // optional
} UserSettingUpdateData;

// ViewPreference is the typed data model for the view_preference entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  char*type;
  voxgig_value*updatedat;
  char*viewtype;
} ViewPreference;

// ViewPreferenceLoadMatch is the typed request payload for ViewPreference.load.
typedef struct {
  voxgig_value*view_type;
} ViewPreferenceLoadMatch;

// ViewPreferenceCreateData is the typed request payload for ViewPreference.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  char*id;
  char*type;
  voxgig_value*updatedat;
  char*viewtype;
} ViewPreferenceCreateData;

// ViewPreferenceUpdateData is the typed request payload for ViewPreference.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
  char*viewtype;  // optional
} ViewPreferenceUpdateData;

// ViewPreferenceRemoveMatch is the typed request payload for ViewPreference.remove.
typedef struct {
  char*id;
} ViewPreferenceRemoveMatch;

// Webhook is the typed data model for the webhook entity.
typedef struct {
  bool allpublicteams;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  bool enabled;
  char*id;
  char*label;  // optional
  char*resourcetypes;
  char*secret;  // optional
  voxgig_value*team;  // optional
  char*teamids;  // optional
  voxgig_value*updatedat;
  char*url;  // optional
} Webhook;

// WebhookLoadMatch is the typed request payload for Webhook.load.
typedef struct {
  char*id;
} WebhookLoadMatch;

// WebhookListMatch is the typed request payload for Webhook.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} WebhookListMatch;

// WebhookCreateData is the typed request payload for Webhook.create.
typedef struct {
  bool allpublicteams;
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;
  voxgig_value*creator;  // optional
  bool enabled;
  char*id;
  char*label;  // optional
  char*resourcetypes;
  char*secret;  // optional
  voxgig_value*team;  // optional
  char*teamids;  // optional
  voxgig_value*updatedat;
  char*url;  // optional
} WebhookCreateData;

// WebhookUpdateData is the typed request payload for Webhook.update.
typedef struct {
  char*id;
  bool allpublicteams;  // optional
  voxgig_value*archivedat;  // optional
  voxgig_value*createdat;  // optional
  voxgig_value*creator;  // optional
  bool enabled;  // optional
  char*label;  // optional
  char*resourcetypes;  // optional
  char*secret;  // optional
  voxgig_value*team;  // optional
  char*teamids;  // optional
  voxgig_value*updatedat;  // optional
  char*url;  // optional
} WebhookUpdateData;

// WebhookRemoveMatch is the typed request payload for Webhook.remove.
typedef struct {
  char*id;
} WebhookRemoveMatch;

// WebhookFailureEvent is the typed data model for the webhook_failure_event entity.
typedef struct {
  voxgig_value*createdat;
  char*executionid;
  double httpstatus;  // optional
  char*id;
  char*responseorerror;  // optional
  char*url;
  voxgig_value*webhook;  // optional
} WebhookFailureEvent;

// WebhookFailureEventListMatch is the typed request payload for WebhookFailureEvent.list.
typedef struct {
  char*oauth_client_id;  // optional
  char*webhook_id;  // optional
} WebhookFailureEventListMatch;

// WorkflowState is the typed data model for the workflow_state entity.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  char*name;
  double position;
  voxgig_value*team;  // optional
  char*type;
  voxgig_value*updatedat;
} WorkflowState;

// WorkflowStateLoadMatch is the typed request payload for WorkflowState.load.
typedef struct {
  char*id;
} WorkflowStateLoadMatch;

// WorkflowStateListMatch is the typed request payload for WorkflowState.list.
typedef struct {
  char*after;  // optional
  char*before;  // optional
  int64_t first;  // optional
  bool include_archived;  // optional
  int64_t last;  // optional
  voxgig_value*order_by;  // optional
} WorkflowStateListMatch;

// WorkflowStateCreateData is the typed request payload for WorkflowState.create.
typedef struct {
  voxgig_value*archivedat;  // optional
  char*color;
  voxgig_value*createdat;
  char*description;  // optional
  char*id;
  voxgig_value*inheritedfrom;  // optional
  char*name;
  double position;
  voxgig_value*team;  // optional
  char*type;
  voxgig_value*updatedat;
} WorkflowStateCreateData;

// WorkflowStateUpdateData is the typed request payload for WorkflowState.update.
typedef struct {
  char*id;
  voxgig_value*archivedat;  // optional
  char*color;  // optional
  voxgig_value*createdat;  // optional
  char*description;  // optional
  voxgig_value*inheritedfrom;  // optional
  char*name;  // optional
  double position;  // optional
  voxgig_value*team;  // optional
  char*type;  // optional
  voxgig_value*updatedat;  // optional
} WorkflowStateUpdateData;

#endif // LINEAR_ENTITY_TYPES_H
